import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Private from "./Layout/Private/Private";
import Login from "./Pages/Login";
import Public from "./Layout/Public";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Private />}>
            <Route path="/" element={<Home />}/>
        </Route>
        <Route path="/" element={<Public />}>
          <Route path="/login" element={<Login />}/>
          <Route  path="/register" element={<Register />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
