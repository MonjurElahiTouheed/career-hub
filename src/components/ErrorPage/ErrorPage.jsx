import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps !!!</h2>
            <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;