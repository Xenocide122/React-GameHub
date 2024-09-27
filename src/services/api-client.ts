import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f30e85d2a6e419a875e18118c8d4926",
  },
});
