import { Platform } from "../hooks/usePlatforms";
import APIClient from "./api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const gameService = new APIClient<Game>("/games");

export default gameService;
