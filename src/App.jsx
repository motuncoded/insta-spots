import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header />
      <main aria-label="hero section">
        <Profile />
        <Cards />

        <Footer />
      </main>
    </>
  );
}

export default App;
