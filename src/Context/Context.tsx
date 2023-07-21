import { createContext, useContext, useEffect, useState } from "react";
import { IGitHubContextProps, IGithubContext } from ".";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";


const GithubContext = createContext({} as IGithubContext)

export const GithubProvider = ({ children }: IGitHubContextProps) => {

    const rootUrl = 'https://api.github.com';
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    // Request
    const [requests, setRequests] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({ show: false, msg: '' })

    const searchGithubUser = async (user: string) => {

        try {
            toggleError()
            setIsLoading(true)
            const response = await axios.get(`${rootUrl}/users/${user}`)
            if (response) {
                setGithubUser(response.data)
                // console.log(response.data);
                const { followers_url, login } = response.data
                const reposData = await axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
                const followersData = await axios.get(`${followers_url}?per_page=100`)
                setRepos(reposData.data)
                setFollowers(followersData.data)
                setLastSearch(user)
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toggleError(true, 'there is no user with that username')
        }
        checkRequest()
    }
    // last search
    const setLastSearch = (user: string) => {
        localStorage.setItem('lastSearch', JSON.stringify(user))
    }
    const getLastSearch = () => {
        const lastSearch = localStorage.getItem('lastSearch')
        if (lastSearch !== null) {
            return JSON.parse(lastSearch)
        }
        return null
    }

    // check rate
    const checkRequest = async () => {
        try {
            const response = await axios.get(`${rootUrl}/rate_limit`)
            const remaining = response.data.rate.remaining
            setRequests(remaining)
            if (remaining === 0) {
                toggleError(true, 'Sorry, you have exceeded your hourly rate limit!')
            }
        } catch (error) {
            console.log(error);
        }
    }
    // Error
    const toggleError = (show: boolean = false, msg: string = '') => {
        setError({ show, msg })
    }




    useEffect(() => {

        checkRequest()
    }, [])

    return (
        <GithubContext.Provider value={{
            githubUser,
            repos,
            followers,
            requests,
            toggleError,
            error,
            searchGithubUser,
            isLoading,
            setLastSearch,
            getLastSearch

        }}>
            {children}
        </GithubContext.Provider>
    )
}

export const useGithubContext = () => {
    return useContext(GithubContext)
}