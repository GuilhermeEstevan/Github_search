import { Wrapper } from ".";
import { useGithubContext } from "../../Context/Context";
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const Card = () => {

  const { githubUser, isLoading } = useGithubContext()
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username
  } = githubUser

  if (isLoading) {
    return
  }

  return <Wrapper>
    <header>
      <img src={avatar_url} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{twitter_username && ` @ ${twitter_username}`}</p>
      </div>
      <a href={html_url}>follow</a>
    </header>
    <p className="bio">{bio}</p>
    <div className="links">
      <p>
        <MdBusiness /> {company}
      </p>
      <p>
        <MdLocationOn /> {location || 'Earth'}
      </p>
      <a href={`https://${blog}`}>
        <MdLink /> {blog}
      </a>
    </div>
  </Wrapper>;
};

export default Card;
