import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [connectHover, setConnectHover] = useState(false);
    const [companyHover, setCompanyHover] = useState(false);
    const [productHover, setProductHover] = useState(false);

    console.log(productHover, companyHover, connectHover);

    const handleToggle = (e) => {
        setNavbarOpen(!navbarOpen);
    };

    const handleConnectHover = (e) => {
        setConnectHover(!connectHover);
        setCompanyHover(false);
        setProductHover(false);
    };

    const handleProductHover = (e) => {
        setProductHover(!productHover);
        setCompanyHover(false);
        setConnectHover(false);
    };

    const handleCompanyHover = (e) => {
        setCompanyHover(!companyHover);
        setConnectHover(false);
        setProductHover(false);
    };
    return (
        <div className='header-main'>
            <div className='header-navbar flex container'>
                <h1>Blogr</h1>
                <div className={`header-navbar-list ${navbarOpen ? 'burgerOn' : 'burgerOff'}`}>
                    <div>
                        <p onClick={handleProductHover}>Product</p>
                        {productHover && (
                            <div
                                id='header-navbar-list-detail1'
                                className='header-navbar-list-detail'>
                                <p>Overview</p>
                                <p>Pricing</p>
                                <p>Marketplace</p>
                                <p>Features</p>
                                <p>Integrations</p>
                            </div>
                        )}
                        <p onClick={handleCompanyHover}>Company</p>
                        {companyHover && (
                            <div
                                id='header-navbar-list-detail2'
                                className='header-navbar-list-detail'>
                                <p>Abouts</p>
                                <p>Team</p>
                                <p>Blog</p>
                                <p>Career</p>
                            </div>
                        )}
                        <p onClick={handleConnectHover}>Connect</p>
                        {connectHover && (
                            <div
                                id='header-navbar-list-detail3'
                                className='header-navbar-list-detail'>
                                <p>Contact</p>
                                <p>Newsletter</p>
                                <p>LinkedIn</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <p>Login</p>
                        <p>Sign Up</p>
                    </div>
                </div>
                <div onClick={handleToggle}>
                    {navbarOpen ? <MdClose className='icon' /> : <FiMenu className='icon' />}
                </div>
            </div>
            <div className='container header-jargon'>
                <div>
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                </div>
                <div className='header-jargon-btn flex'>
                    <button>Start for Free</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
