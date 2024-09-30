import React, { useState } from "react";
function LoginForm() {
    const [email, setEmail] = useState("evieborvanessa@yahoo.com");
    const [password, setPassword] = useState("osose1");

    return (
        <form>
            <h1>Login Form</h1>
            <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                type="email"
                placeholder="username" />

            <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                type="password"
                placeholder="password"
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default LoginForm