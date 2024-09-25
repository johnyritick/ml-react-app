import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardIcon, GraphIcon, LogoutIcon, MedalStarIcon, MessagesIcon, SettingsIcon } from '../../Assets/Icons/Icon';

const Sidebar = ({ role }: { role: string }) => {

  return (
    role === "admin" ?
      <div className="w-20 bg-white shadow-lg h-full flex flex-col items-center py-4 overflow-hidden">
        <Link to="/panel/dashboard" className='my-4'>
          <DashboardIcon />
        </Link>
        <Link to="/panel/graph" className='my-4'>
          <GraphIcon />
        </Link>
        <Link to="" className='my-4'>
          <MedalStarIcon />
        </Link>
        <Link to="" className='my-4'>
          <MessagesIcon />
        </Link>
        <Link to="" className='my-4'>
          <SettingsIcon />
        </Link>
      </div> : <div className="w-20 bg-white shadow-lg h-full flex flex-col items-center py-4 overflow-hidden">

        <Link to="/panel/user-dashboard" className='my-4'>
          <DashboardIcon />
        </Link>
        <Link to="/panel/learn-more" className='my-4'>
          <GraphIcon />
        </Link>
        <Link to="/login" className='my-4'>
          <LogoutIcon />
        </Link>
      </div>
  );
};

export default Sidebar;
