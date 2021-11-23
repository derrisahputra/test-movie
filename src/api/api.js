const api = require("./base/baseURL");
const api_key = process.env.API_KEY || "3e757f2b25100b5039e5934eca4fc495"; 

module.exports = {
    nowPlaying:  api.baseURL + "/now_playing?api_key=" + api_key,
    topRated:  api.baseURL + "/top_rated?api_key=" + api_key,
    upComing:  api.baseURL + "/upcoming?api_key=" + api_key,
}
