import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Private from "./Layout/Private/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Private />}>
            <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
