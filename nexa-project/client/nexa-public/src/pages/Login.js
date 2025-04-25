import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;