import CardContainer from "./components/cardContainer/CardContainer";
import Header from "./components/header/Header";
import "./App.scss";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header setSearch={setSearch}/>
      <CardContainer search={search}/>
    </div>
  );
}

export default App;
