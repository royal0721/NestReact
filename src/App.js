import React from "react";
import { BrowserRouter, Routes , Route, Link} from "react-router-dom";
import HomePage from "./component/HomePage";
import PlayList from "./component/PlayList";
function App() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
    padding: '20px'
  };
  return (
    <BrowserRouter>
      <Link to="/" style={linkStyle}>首頁</Link>
      <Link to="/playlist" style={linkStyle}>節目表</Link>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/playlist" element={<PlayList/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// <Route exact index element={<Home />} />
// <Route exact path="/about" element={<About />} />