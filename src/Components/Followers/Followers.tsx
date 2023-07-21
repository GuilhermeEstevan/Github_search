import { Wrapper } from ".";
import { useGithubContext } from "../../Context/Context";

interface IFollower {
    avatar_url: string
    html_url: string
    login: string,
}

const Followers = () => {

    const { followers } = useGithubContext()
    


    return (
        <Wrapper>
            <div className="followers">
                {followers.map((follower: IFollower, index: number) => {
                    const { avatar_url, html_url, login } = follower

                    return (
                        <article key={index}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>{html_url}</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Wrapper>
    )
}
export default Followers