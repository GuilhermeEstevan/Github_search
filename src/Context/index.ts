import { ReactNode } from 'react'

export interface IGitHubContextProps {
    children: ReactNode
}

export interface IGithubContext {
    githubUser: any,
    repos: any,
    followers: any
    requests: number
    toggleError: (show: boolean, msg: string) => void
    error: IError,
    searchGithubUser: (user: string) => void
    isLoading: boolean
    setLastSearch: (user: string) => void
    getLastSearch: () => string | null
}

export interface IError {
    show: boolean
    msg: string
}
