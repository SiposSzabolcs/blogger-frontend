import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Add from "./pages/Add.jsx";
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (ProcessingInstruction.env.NODE_ENV === 'production') disableReactDevTools()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<Add />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
