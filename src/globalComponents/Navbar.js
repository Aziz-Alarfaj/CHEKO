import { Menu, Switch } from 'antd';


const NavBar = ({ darkMode }) => {

    const items = [
        {
            label: 'Home',
            key: 'home',
        },
        {
            label: 'Map',
            key: 'map',
        },
        {
            label: <Switch onClick={darkMode} />,
            key: 'darkMode'
        }
    ]

    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={items}
            />
        </>
    );
}

export default NavBar;
