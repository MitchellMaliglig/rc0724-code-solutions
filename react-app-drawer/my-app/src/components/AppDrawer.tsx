import { Outlet } from 'react-router-dom';
import { MenuItem } from './Header';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { DrawerItem } from './DrawerItem';

type appDrawerProps = {
  menuItems: MenuItem[];
  heading: string;
};

export function AppDrawer({ menuItems, heading }: appDrawerProps) {
  const [status, setStatus] = useState('closed');
  const [hidden, setHidden] = useState('hidden');

  function toggleDrawer() {
    status === 'closed' ? setStatus('open') : setStatus('closed');
    status === 'closed' ? setHidden('') : setHidden('hidden');
  }

  return (
    <div className="top">
      <div className={`drawer ${status}`}>
        <FaBars onClick={toggleDrawer} />
        <h2 className={hidden}>{heading}</h2>
        <ul>
          {menuItems.map((item, index) => (
            <DrawerItem key={index} item={item} hidden={hidden} />
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
