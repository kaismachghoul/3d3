// src/components/ContextMenu.js
import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const MyContextMenu = () => {
  return (
    <div>
      <ContextMenuTrigger id="circle-menu">
        <div>Right-click me for context menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="circle-menu">
        <MenuItem data={{ foo: 'bar' }}>Item 1</MenuItem>
        <MenuItem data={{ key: 'value' }}>Item 2</MenuItem>
      </ContextMenu>
    </div>
  );
};

export default MyContextMenu;
