import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li>
          <a href="/">
            <i className="fa fa-user"></i> Profile
          </a>
        </li>
        <li>
          <a href="/settings">
            <i className="fa fa-cog"></i> Settings
          </a>
        </li>
        <li>
          <a href="/messages">
            <i className="fa fa-envelope"></i> Messages
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
