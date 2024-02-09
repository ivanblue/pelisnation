import { Outlet } from 'react-router-dom';

import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 rounded-xl bg-gray text-white py-5">
      <Header />
      <main className="px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
