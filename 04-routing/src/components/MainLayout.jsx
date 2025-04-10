import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <main className='flex flex-col items-center justify-between min-h-dvh max-h-full bg-gradient-to-b from-slate-950 to-slate-900'>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default MainLayout;