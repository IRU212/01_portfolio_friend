import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Calendar from "./Calendar/Calendar";

// ページコンポーネント
// import Header from "./Header/Header";
import SideHeader from "./Header/SideHeader";
import Home from "./Home/Home";

// scss import 
import styles from './scss/common.module.scss'


function App() {

  // バックエンド 元URL
  const backURL: string = "http://localhost:8000/api";

  return (
    <div className={styles.Common}>
      <BrowserRouter>
        <SideHeader
          backURL={backURL}
        />
        <div className={styles.CommonDiv}>
          {/* <Header /> */}
          <Routes>
            <Route 
              path="/" 
              element={<Home backURL={backURL} />}
            />
            <Route 
              path="/calendar" 
              element={<Calendar backURL={backURL} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
