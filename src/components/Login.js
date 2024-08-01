import React from 'react';
import './Register.css';
import './login.css';

const Login = () => {
  return (
    <>
    <div className="container-1">
      <div className="form">
        <h2>𝙻𝚘𝚐𝚒𝚗</h2>
        <form>
          <label>
            <input type="text" placeholder="𝖚𝖘𝖊𝖗_𝖓𝖆𝖒𝖊" name="username" />
          </label>
          <label>
            <input type="password" placeholder="𝖕𝖆𝖘𝖘𝖜𝖔𝖗𝖉"  name="password" />
          </label>
          <button type="submit">𝕷𝖔𝖌𝖎𝖓</button>
        </form>
      </div>
    </div>
    <footer className="footer">
        <p>&copy; 2024 TicketBook. All rights reserved. created by Gokul</p>
      </footer>

    </>
  );
};

export default Login;