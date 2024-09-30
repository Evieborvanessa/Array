import { Link } from "react-router-dom";

function Welcome({name}) {
    return (
        <section>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/loginform">loginform</Link>
                
            </nav>
            <h1>Hello <span>{name}</span></h1>
            <p>i am enjoying my class</p>
        </section>
    );
}
export default Welcome
