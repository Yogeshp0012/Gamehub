import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8a47aff550d748e3a8361441676a93e1",
  },
});
