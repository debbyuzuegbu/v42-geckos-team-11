import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import "./Styles/newPost.css"
import Header from "./components/Header";
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="container routes">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<NewPost />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
