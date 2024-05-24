import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePet from "./components/SinglePet";
import NotFound from "./pages/NotFound";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Rabbits from "./pages/Rabbits";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="cats" element={<Cats />} />
        <Route path="rabbits" element={<Rabbits />} />
        <Route path="/:id" element={<SinglePet />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
