import './App.css';
import { useState, useEffect, createContext, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, ConfigProvider, Spin } from 'antd';
import { fetchRestaurantData } from './models/restaurant';
import { getCategories } from './utils/functions';
import NavBar from './globalComponents/Navbar';
import Search from './globalComponents/Search';
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
  const [filteredRestaurantData, setFilteredRestaurantData] = useState();
  const [categories, setCategories] = useState();

  const setDarkMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
  }

  // Fetch data
  useEffect(() => {
    fetchRestaurantData().then((res) => {
      setRestaurantData(res);
      setCategories(getCategories(res));
    })
  }, []);

  const filterRestaurantData = (data) => {
    setFilteredRestaurantData(data);
  }

  console.log('restaurantData', restaurantData); // for debugging

  const value = useMemo(
    () => ({ restaurantData, categories, filteredRestaurantData, setRestaurantData }),
    [restaurantData, categories, filteredRestaurantData]
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
          },
          Menu: {
            horizontalItemSelectedBg: '#F4CBDF',
            horizontalItemSelectedColor: '#000',
            horizontalItemBorderRadius: '0px 0px 15px 15px',
            activeBarHeight: 0,
            itemColor: '#fff',
            itemHoverColor: '#F4CBDF'
          }
        },
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <RestaurantContext.Provider value={value}>
        <Layout className="layout">
          <Header className='App-header'>
            <NavBar darkMode={setDarkMode} />
            <Search categories={categories} restaurantData={restaurantData} filterRestaurantData={filterRestaurantData} />
          </Header>

          <Content className='App-content' >
            {restaurantData ?
              (
                <Outlet />
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
      </RestaurantContext.Provider>
    </ConfigProvider>

  );
}

export default App;
