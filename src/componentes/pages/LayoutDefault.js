import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import {Outlet} from "react-router-dom";
import Container from '../layout/Container';

const LayoutDefault = () => {
    return (
        <>
            <NavBar />
            <Container customClass="min-height">
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default LayoutDefault