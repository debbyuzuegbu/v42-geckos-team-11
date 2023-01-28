import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import Profile from './components/Profile';
import "./Styles/newPost.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <NewPost /> */}
    </div>
  );
}

export default App;
