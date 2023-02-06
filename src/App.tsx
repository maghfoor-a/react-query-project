import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query"
import Characters from "./components/Characters";
import HomePage from "./components/HomePage";
import ReactQueryCharacters from "./components/ReactQueryCharacters";
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/react-query" element={<ReactQueryCharacters />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
