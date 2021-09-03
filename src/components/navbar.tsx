import React from 'react';
import './navbar.sass';

const Navbar = () => {
  return (
    <li id="menu">
      <ul>
        <a id="title" href="#Home">
          <div id="avatar">
            <img src="https://cdn.discordapp.com/avatars/458988300418416640/05549a0ef3b6c2d804214f8c8e2c40bd.webp?size=4096" />
          </div>
          <p>xiao xigua</p>
        </a>
      </ul>
    </li>
  );
};

export default Navbar;
