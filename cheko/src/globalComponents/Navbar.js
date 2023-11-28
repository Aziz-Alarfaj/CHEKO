import { Link, useLocation } from "react-router-dom";
import { Menu, Switch } from 'antd';



const NavBar = ({ darkMode }) => {

    const location = useLocation();

    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: '/',
        },
        {
            label: <Link to="/map">Map</Link>,
            key: '/map',
        },
        {
            label: <Switch onClick={darkMode} />,
            key: 'darkMode'
        }
    ]

    return (
        <Menu
            style={{ height: '135%', width: '98%', borderRadius: '0px 0px 36px 0px', backgroundColor: '#242633', paddingBottom: '32px', paddingLeft: '10vw' }}
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            items={items}
        />
    );
}

export default NavBar;
