import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom';
const LayoutDefaultAdm = () => {
    return (
        <>
            <NavBar />
                <Outlet />
            <Footer />
        </>
    )
}

export default LayoutDefaultAdm