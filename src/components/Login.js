import React, { useState } from "react";
import { Link } from "react-router-dom";

const handleSubmit = (event) => {
    event.prevetDefault();
    // We make the call to login-service (or message bus) here
}
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return <div className="container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <p>
            <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
            No account?<Link to="/register">Register</Link>
        </p>
    </div>
};

export default Login;
