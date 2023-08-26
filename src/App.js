// Required
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Employes from "./pages/Employes";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Employes" element={<Employes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
