import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService from "../services/platformService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: {
      count: platforms.length,
      results: platforms,
      next: null,
      previous: null,
    },
  });
};

export default usePlatforms;
