import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./nav-bar";
import "./index.css";

export default App;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
    </>
  );
}
/* <ul className="m-0 p-0 list-none ">
<li className="block text-center float-left w-160">
  <a href="/">HTML</a>
</li>
<li className="block text-center float-left w-160">
  <a href="/">CSS</a>
</li>
<li className="block text-center float-left w-160">
  <a href="/">JavaScript</a>
</li>
<li className="block text-center float-left w-160">
  <a href="/">Python</a>
</li>
</ul> */
