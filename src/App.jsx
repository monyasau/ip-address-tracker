import { useState } from "react";
import TopNav from "./components/TopNav";
import IpMain from "./components/IpMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <IpMain/>
    </>
  );
}

export default App;
