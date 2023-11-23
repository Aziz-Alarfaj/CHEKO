import { Link } from "react-router-dom";
import { Menu, Switch } from 'antd';



const NavBar = ({ darkMode }) => {

    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
        },
        {
            label: <Link to="/map">Map</Link>,
            key: 'map',
        },
        {
            label: <Switch onClick={darkMode} />,
            key: 'darkMode'
        }
    ]

    return (
        <div style={{ minWidth: '100vh' }} >
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={items}
            />
        </div >
    );
}

export default NavBar;
