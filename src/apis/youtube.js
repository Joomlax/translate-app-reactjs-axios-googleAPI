import axios from "axios";
const KEY = "AIzaSyDZkou5HwsLxXvY6ObHpVWlhqhSLj6iaME";
//https://www.googleapis.com/youtube/v3/search

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
