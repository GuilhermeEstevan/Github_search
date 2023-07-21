import { Wrapper } from "."
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { isAuthenticated, logout, user } = useAuth0()

    const isUser = isAuthenticated && user
    const handleLogout = () => {
        localStorage.removeItem('lastSearch')
        return logout({ logoutParams: { returnTo: window.location.origin } })
    }

    return (
        <Wrapper>
            {isUser && user.picture && (
                <img src={user.picture} alt={user.name} />
            )}
            {isUser && user.name && (
                <h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>
            )}
            {isUser &&
                (<button onClick={handleLogout}>
                    logout
                </button>)}
        </Wrapper>
    )
}
export default Navbar