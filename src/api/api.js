const api = require("./base/baseURL");
const api_key = process.env.API_KEY || "3e757f2b25100b5039e5934eca4fc495"; 

module.exports = {
    nowPlaying:  api.baseURL + "/movie/now_playing?api_key=" + api_key,
    upComing:  api.baseURL + "/movie/upcoming?api_key=" + api_key,
    topRated:  api.baseURL + "/tv/top_rated?api_key=" + api_key,
    onTheAir:  api.baseURL + "/tv/on_the_air?api_key=" + api_key,
    search:  api.baseURL + "/search/movie?api_key=" + api_key,
}
