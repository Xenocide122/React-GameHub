import APIClient from "./api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformService = new APIClient<Platform>("/platforms/lists/parents");

export default platformService;
