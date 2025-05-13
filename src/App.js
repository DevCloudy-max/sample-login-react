import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h1>Login</h1>

      <form>
        <label>Email</label>
        <input type="email" name="email" required />

        <label>Password</label>
        <input type="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
