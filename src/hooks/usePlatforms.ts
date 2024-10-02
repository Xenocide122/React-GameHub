import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
