import { Wrapper } from ".";
import { Card } from "..";

import Followers from "../Followers/Followers";

const User = () => {


    return (
        <section className="section">
            <Wrapper className="section-center">
                <Card />
                <Followers />
            </Wrapper>
        </section>
    )
}
export default User