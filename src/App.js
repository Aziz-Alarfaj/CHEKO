import './App.css';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, ConfigProvider } from 'antd';
import NavBar from './globalComponents/Navbar';
import FooterContent from './globalComponents/FooterContent';


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { Header, Content, Footer } = Layout;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
  }

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
          <Outlet />
        </Content>

        <Footer className='App-footer'>
          <FooterContent />
        </Footer>

      </Layout>
    </ConfigProvider>

  );
}

export default App;
