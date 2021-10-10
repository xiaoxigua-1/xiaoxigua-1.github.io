import React, {FC} from 'react';
import './sass/navbar.sass';

const Navbar: FC = () => {
  return (
    <li id="menu">
      <ul>
        <a id="title" href="#Home">
          <div id="avatar">
            <img src="avatar.webp" />
          </div>
          <div>xiao xigua</div>
        </a>
      </ul>
    </li>
  );
};

export default Navbar;
