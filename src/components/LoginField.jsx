import React, { useState } from 'react';

//NOTE: is the import correct?
 
// Testing users (NOTE: Will probably remove variable)
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];
// Define username, password, and errorMessage
const LoginField = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin(username);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{errorMessage}</p>
    </div>
  );
};

export default LoginField;