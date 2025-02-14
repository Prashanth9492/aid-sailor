
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <header className="bg-card border-b border-border h-16">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Welcome back, {user?.name}</span>
        </div>
      </div>
    </header>
  );
};
