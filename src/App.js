import { Routes,Route } from "react-router-dom";
import Container from "./components/container/container";
import Type from "./routes/type/type";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container/>}/>
      <Route path="/:type" element={<Type/>}/>
    </Routes>
  );
}

export default App;
