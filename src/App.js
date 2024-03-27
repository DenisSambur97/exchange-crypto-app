import './App.css';
import MainScreen from "./components/MainScreen/MainScreen";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <MainScreen/>
        <Footer/>
    </div>
  );
}

export default App;
