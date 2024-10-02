import { Platform } from "../hooks/usePlatforms";
import APIClient from "./api-client";

const platformService = new APIClient<Platform>("/platforms/lists/parents");

export default platformService;
