import React from 'react';
import { useState } from 'react';
import './Login.css'

    

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
            if (isSignUp) {
                // Handle sign up logic
                console.log('Signing up:', username, password);
              } else {
                // Handle login logic
                console.log('Logging in:', username, password);
              }
            };
  return (
    <div className="auth-container">
    <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
    </form>
    <p onClick={() => setIsSignUp(!isSignUp)}>
      {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
    </p>
  </div>
  )
}
}