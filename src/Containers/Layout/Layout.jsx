import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Navbar from '../../Component/Navbar/Navbar';

const Layout = () => {
    
    return (
        <section className={styles.layout}>
            <Navbar />
            <Outlet/>
        </section>
    )
};

export default Layout;