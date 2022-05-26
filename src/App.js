import React from "react";
import { BrowserRouter, Routes , Route, NavLink} from "react-router-dom";
import HomePage from "./component/HomePage";
import PlayList from "./component/PlayList";
function App() {
  const linkStyle = {
    textDecoration: "none",
    color: 'white',
    padding: '0 20px',
    backgroundColor: "black"
  };
  return (
    <BrowserRouter>
      <NavLink to="/" style={linkStyle}>首頁</NavLink>
      <NavLink to="/playlist" style={linkStyle}>節目表</NavLink>
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