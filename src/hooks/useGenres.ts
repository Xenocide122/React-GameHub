import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: {
      count: genres.length,
      results: genres,
      next: null,
      previous: null,
    },
  });
};

export default useGenres;
