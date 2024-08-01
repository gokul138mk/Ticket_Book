// src/components/Contact.js
import React from 'react';
import'../components/Contact.css';

const Contact = () => {
  return (
    <>
      <div className="container-1">
      <div className="form">
        <h2>𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚞𝚜</h2>
        <form>
          <label>
            <input type="text" placeholder="𝖤𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝗇𝖺𝗆𝖾" name="username" />
          </label>
          <label>
            <input type="password" placeholder="𝖤𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝖾𝗆𝖺𝗂𝗅"  name="password" />
          </label>
          <label>
            <input type="text" placeholder="𝖬𝖾𝗌𝗌𝖺𝗀𝖾"  name="password" />
          </label>
          <button type="submit">𝖲𝗎𝖻𝗆𝗂𝗍</button>
        </form>
      </div>
    </div>
    <footer className="footer">
        <p>&copy; 2024 TicketBook. All rights reserved. created by Gokul</p>
      </footer>
    </>
  );
};

export default Contact;