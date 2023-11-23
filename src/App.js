import './App.css';
import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, ConfigProvider, Spin } from 'antd';
import { fetchRestaurantData } from './models/restaurant';
import NavBar from './globalComponents/Navbar';
import FooterContent from './globalComponents/FooterContent';

export const RestaurantContext = createContext();

const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { Header, Content, Footer } = Layout;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [restaurantData, setRestaurantData] = useState();

  const setDarkMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
  }

  // Fetch data
  useEffect(() => {
    fetchRestaurantData().then((res) => {
      setRestaurantData(res);
    })
  }, []);

  console.log('restaurantData', restaurantData); // for debugging


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: colorBgContainer
          }
        },
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout className="layout">

        <Header className='App-header'>
          <NavBar darkMode={setDarkMode} />
        </Header>

        <Content className='App-content' >
          {restaurantData ?
            (
              <RestaurantContext.Provider value={restaurantData}>
                <Outlet />
              </RestaurantContext.Provider>
            )
            : (
              <div className='App-loading'>
                <Spin />
              </div>
            )}
        </Content>

        <Footer className='App-footer'>
          <FooterContent />
        </Footer>

      </Layout>
    </ConfigProvider>

  );
}

export default App;
