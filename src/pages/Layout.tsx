import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: undefined,
    platformId: undefined,
    sortOrder: "",
    searchText: "",
  });

  const handleSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {/* Pass gameQuery and setGameQuery to Outlet components */}
      <Box padding={2.5}>
        <Outlet context={{ gameQuery, setGameQuery }} />
      </Box>
    </>
  );
};

export default Layout;
