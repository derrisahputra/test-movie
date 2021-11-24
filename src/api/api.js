const base_url = process.env.VUE_APP_BASE_URL;
const api_key = process.env.VUE_APP_API_KEY ; 

module.exports = {
    nowPlaying:  base_url + "/movie/now_playing?api_key=" + api_key,
    upComing:  base_url + "/movie/upcoming?api_key=" + api_key,
    topRated:  base_url + "/tv/top_rated?api_key=" + api_key,
    onTheAir:  base_url + "/tv/on_the_air?api_key=" + api_key,
    search:  base_url + "/search/movie?api_key=" + api_key,
}
