import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './Layout.css';
import NavBars from './components/NavBars';
import { useParams } from './hooks/useParams';
import Hero from './components/Hero';

function Layout() {
    const { isSelected, setSelected } = useParams();
    const location = useLocation();
    return (
        <div className='flex flex-col gap-4 '>
            <NavBars />
            <section className='relative'>
                <Routes>
                    <Route path="/" element={<Hero />} />
                </Routes>
                <main className="max-w-xl mx-auto">
                    <Outlet />
                </main>
            </section>
        </div>
    );
}

export default Layout;
