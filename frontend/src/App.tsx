import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";


function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
