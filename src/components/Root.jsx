
import { Outlet } from 'react-router-dom';

import Navbar from './shared/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Root = () => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
       },[])
    return (
        <div className='font-mukta tracking-widest relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;