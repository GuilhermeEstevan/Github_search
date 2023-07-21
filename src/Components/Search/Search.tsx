import { Wrapper, ErrorWrapper } from "."
import { useState, FormEvent } from 'react'
import { MdSearch } from 'react-icons/md';
import { useGithubContext } from "../../Context/Context";

const Search = () => {

  const [user, setUser] = useState('')
  const { requests, error, searchGithubUser } = useGithubContext()



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (user) {
      searchGithubUser(user)
      setUser('')
    }
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show &&
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        }
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => { setUser(e.target.value) }} />
            {requests > 0 && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>Requests : {requests} / 60</h3>
      </Wrapper>
    </section>
  )
}
export default Search