import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import "./Styles/newPost.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
