import UserButton from './user-button';

import Logo from './logo';
import MainNavigation from './main-navigation';
import MainNavigationMobile from './main-navigation-mobile';

const Header = () => {
  return (
    <div className="flex justify-between px-6 pb-5 border-b border-lightgray">
      <div className="flex justify-between gap-3 md:gap-10">
        <MainNavigationMobile />
        <Logo />
        <MainNavigation />
      </div>
      <div className="hidden md:block">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
