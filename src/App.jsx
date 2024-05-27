import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Rabbits from "./pages/Rabbits";
import AppLayout from "./pages/AppLayout";
import PetDetails from "./pages/PetDetails";
import { useState } from "react";
import data from "./data";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchHeading, setSearchHeading] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout
            search={search}
            setSearch={setSearch}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchHeading={searchHeading}
            setSearchHeading={setSearchHeading}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              searchHeading={searchHeading}
              setSearchHeading={setSearchHeading}
            />
          }
        />
        <Route path=":id" element={<PetDetails />} />
        <Route path="dogs/*" element={<Dogs />} />
        <Route path="cats" element={<Cats />} />
        <Route path="rabbits" element={<Rabbits />} />
        {/* <Route path="/search" element={<search />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
