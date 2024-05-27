import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Rabbits from "./pages/Rabbits";
import AppLayout from "./pages/AppLayout";
import PetDetails from "./pages/PetDetails";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<PetDetails />} />
        <Route path="dogs/*" element={<Dogs />} />
        <Route path="cats" element={<Cats />} />
        <Route path="rabbits" element={<Rabbits />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
