import "./App.css";
import Header from "./Components/Header/Header";
import QR from "./Components/QR/qr";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <QR />
      <Footer />
    </div>
  );
};

export default App;
