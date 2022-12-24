import axios from "axios";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/test")
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <div>
      <div>
        aaaaa
      </div>
    </div>
  );
}

export default App;
