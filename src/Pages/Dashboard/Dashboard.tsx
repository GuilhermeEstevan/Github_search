import { Info, Navbar, Repos, Search, User } from "../../Components"
import { useGithubContext } from "../../Context/Context"
import loadingImage from '../../images/preloader.gif'
import { useEffect } from 'react'


const Dashboard = () => {

  const { isLoading, searchGithubUser, getLastSearch } = useGithubContext()

  // Last Search
  useEffect(() => {
    const lastSearch = getLastSearch()
    if (lastSearch === null) {
      searchGithubUser('guilhermeEstevan')
    } else {
      searchGithubUser(lastSearch)
    }
  }, [])



  if (isLoading) {
    return (
      <main>
        <Navbar />
        <img
          src={loadingImage}
          alt="loading"
          className="loading-img" />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}
export default Dashboard