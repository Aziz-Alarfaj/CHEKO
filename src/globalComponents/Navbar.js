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
        <Menu
            style={{ height: '100%', width: '97%', borderRadius: '0px 0px 36px 0px', backgroundColor: '#242633' }}
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={items}
        />
    );
}

export default NavBar;
