import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comps.jsx/Home.jsx";
import Super from "./comps.jsx/Super.jsx";
import Magicus from "./comps.jsx/Magicus.jsx";
import Nadals from "./comps.jsx/Nadals.jsx";
import Impro from "./comps.jsx/Impro.jsx";

const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/uriweb' : '/';

  return (
    <Router basename={basename}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super" element={<Super />} />
          <Route path="/magicus" element={<Magicus />} />
          <Route path="/nadals" element={<Nadals />} />
          <Route path="/impro" element={<Impro />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
