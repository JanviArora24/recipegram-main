import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Home />} />
        <Route path="add-recipe" element={<AddRecipe />} />
        <Route path="planner" element={<Planner />} />
        <Route path="profile" element={<Profile />} />
        <Route path="saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
