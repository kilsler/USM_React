import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

/**
 * @component
 * @description MainLayout Компонент основного макета приложения, содержащий заголовок, футер и дочерние элементы.
 * @returns {JSX.Element}
 */
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