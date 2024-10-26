
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Your global styles

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false); // Toggle Login Section
  const [ctaIcon, setCtaIcon] = useState('fas fa-chevron-down'); // Initial icon state

  const handleLogin = () => {
    // Check credentials
    if (username === 'luminous' && password === 'luminous') {
      navigate('/home'); // Redirect to Home Page
    } else {
      alert('Invalid Username or Password'); // Simple Alert for Error
    }
  };

  const handleToggle = () => {
    setShowLogin((prev) => !prev);
    // Change icon based on the current state
    setCtaIcon((prev) => (prev === 'fas fa-chevron-down' ? 'fas fa-chevron-up' : 'fas fa-chevron-down'));
  };

  return (
    <div className="wrapper">
      <div className={`login-text ${showLogin ? 'expand' : ''}`}>
        <button className="cta" onClick={handleToggle}>
          <i className={ctaIcon}>^</i>
        </button>
        {/* Show the login form based on the showLogin state */}
        <div className={`text ${showLogin ? 'show-hide' : ''}`}>
          <a href="#">Login</a>
          <hr />
          <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-btn" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>

      <div className="call-text">
        <h1>
          LUMINOUS <span> MEANS </span> SAVING'S
        </h1>
        
      </div>
    </div>
  );
};

export default App;
