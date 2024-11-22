import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";
import { useMemo } from "react";

const useGenre = (id?: number): Genre | undefined => {
  const { data } = useGenres();

  return useMemo(
    () => data?.results.find((genre) => genre.id === id),
    [data?.results, id]
  );
};

export default useGenre;
