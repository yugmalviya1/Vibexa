import React from "react"
import "../style/login.scss"

const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className='button' type="submit">Login</button>
        </div>


        </form>
      </div>
    </main>
  )
}

export default Login