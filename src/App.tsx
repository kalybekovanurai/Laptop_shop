import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import InfoSection from "./components/Info/Info";
import Main from "./components/Main-section/Main";
import Products from "./components/Products";


function App() {
  return (
    <>
      <Header />
      <Main />
      <Products />
      <InfoSection/>
      <Footer />
    </>
  );
}

export default App;
