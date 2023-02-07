import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import HomePage from "./components/HomePage";
import ReactQueryCharacters from "./components/ReactQueryCharacters";
import { ReactQueryDevtools } from "react-query/devtools"




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/react-query" element={<ReactQueryCharacters />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </>
  );
}

export default App;
