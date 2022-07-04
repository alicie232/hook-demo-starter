import { Button } from "./components/Button/Button";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StarWarsPage } from "./pages/StarWarsPage";
import { Navigation } from "./components/Navigation/Navigation";
import { RandomUserPage } from "./pages/RandomUserPage";

function App() {
  return (
    <div className="App">
      <h1>Boilerplate</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starwars" element={<StarWarsPage />} />
        <Route path="/users" element={<RandomUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
