import React from 'react';
import '../styles/sidebarRow.css';
function SidebarRow({ Icon, title, selected }) {
  return (
    <div className={`sideBarRow ${selected && 'selected'}`}>
      <Icon className="sideBarRow__icon" />
      <h4 className="sideBarRow__title">{title}</h4>
    </div>
  );
}

export default SidebarRow;
