
import React from 'react';
import { Link } from 'react-router-dom';
import { TicketIcon, UserIcon, LogOutIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-border">
          <h1 className={`font-semibold text-lg ${!isOpen && 'hidden'}`}>Support Desk</h1>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <ChevronLeftIcon size={20} /> : <ChevronRightIcon size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/tickets"
                className="flex items-center p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <TicketIcon size={20} />
                <span className={`ml-3 ${!isOpen && 'hidden'}`}>Tickets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <UserIcon size={20} />
                <span className={`ml-3 ${!isOpen && 'hidden'}`}>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-border">
          <button
            className="w-full flex items-center p-2 rounded-lg hover:bg-accent transition-colors text-destructive"
          >
            <LogOutIcon size={20} />
            <span className={`ml-3 ${!isOpen && 'hidden'}`}>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
