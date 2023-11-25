import './App.css';
import { useState, useEffect, createContext, useMemo } from "react";
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

  const value = useMemo(
    () => ({ restaurantData, setRestaurantData }),
    [restaurantData]
  );

  console.log('value', value);


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: colorBgContainer
          },
          Button: {
            defaultBg: '#F4CBDF',
            defaultBorderColor: '#F4CBDF',
            fontWeight: 'bold'
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
              <RestaurantContext.Provider value={value}>
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
