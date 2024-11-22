import usePlatforms from "./usePlatforms";
import { Platform } from "../entities/Platform";
import { useMemo } from "react";

const usePlatform = (id?: number): Platform | undefined => {
  const { data } = usePlatforms();

  return useMemo(
    () => data?.results.find((platform) => platform.id === id),
    [data?.results, id]
  );
};

export default usePlatform;
