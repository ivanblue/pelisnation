import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Logo from '../logo';
import UserButton from '../user-button';

import { header_links } from '../constants';

const MainNavigationMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="block md:hidden" aria-label="Menú">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0 bg-secondary">
        <div className="px-6 pt-4 pb-5 border-b border-lightgray">
          <Logo onClick={() => setOpen(false)} />
        </div>
        <nav className="flex flex-col px-6 pt-4 gap-4">
          {header_links.map((link) => (
            <Link key={link.name} to={link.url} className="hover:underline text-white" onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 text-white mt-auto border-t border-lightgray">
          <UserButton onClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainNavigationMobile;
