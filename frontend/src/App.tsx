import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
