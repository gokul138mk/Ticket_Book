import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <>
    <div className="container">
      <div className="form">
        <h2>𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛</h2>
        <form>
          <label>
            <input type="text" placeholder='𝖚𝖘𝖊𝖗_𝖓𝖆𝖒𝖊' name="username" />
          </label>
          <label>
            <input type="text" placeholder='𝖊𝖒𝖆𝖎𝖑' name="username" />
          </label>
          <label>
            <input type="password" placeholder='𝖕𝖆𝖘𝖘𝖜𝖔𝖗𝖉' name="password" />
          </label>
          <label>
            
            <input type="password" placeholder='𝕮𝖔𝖓𝖋𝖎𝖗𝖒 𝖕𝖆𝖘𝖘𝖜𝖔𝖗𝖉' name="confirmPassword" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    <footer className="footer">
        <p>&copy; 2024 TicketBook. All rights reserved. created by Gokul</p>
      </footer>

    </>
  );
};

export default Register;