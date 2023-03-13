import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderBar />
      <Sidebar />
    </div>
  );
}

export default Home;
