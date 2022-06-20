import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import {Outlet} from "react-router-dom";
const LayoutDefault = () => {
    return (
        <>
            <NavBar />
                <Outlet />
            <Footer />
        </>
    )
}

export default LayoutDefault