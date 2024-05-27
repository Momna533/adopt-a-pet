import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const AppLayout = ({
  search,
  setSearch,
  searchResults,
  setSearchResults,
  setSearchHeading,
}) => {
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setSearchHeading={setSearchHeading}
      />
      <Nav />
      <Outlet />
    </>
  );
};

export default AppLayout;
