import React, { useState } from 'react';
import './MenuC.css';

const MenuC = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  return (
    <div className="menu" onClick={toggleSubmenu}>
      <a href="#">Menu principal</a>
      {submenuVisible && (
        <div className="submenu">
          <a href="#">Rayon 1</a>
          <a href="#">Rayon 2</a>
          <a href="#">Rayon 3</a>
        </div>
      )}
    </div>
  );
};

export default MenuC;
