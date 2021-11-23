<template>
  <div class="container">
    <h1 class="sub-title">Top Rated TV Show <span><a href="#" style="font-size: 18px; color: white; margin-left: 20px">Show All Top Rated Tv Show</a></span></h1>
    <div class="card-container">
      <div class="card" v-for="dt in data" :key="dt.id">
        <div class="add-to-watchlist">
          <span> + Add to Watchlist</span>
        </div>
        <img
          class="blur-image"
          :src="'https://image.tmdb.org/t/p/w92/' + dt.poster_path"
          :alt="'Poster of ' + dt.original_name"
        />
        <img
          :src="'https://image.tmdb.org/t/p/w300/' + dt.poster_path"
          :alt="'Poster of ' + dt.original_name"
        />
        <div class="wrapper-detail">
          <p class="info">
            <img
              class="imdb-logo"
              :src="require('@/assets/images/imdb.png')"
              alt="IMDB Logo"
            />
            <span class="vote-average"> {{ dt.vote_average }} / 10</span>
            <span class="release-date"> {{ dt.first_air_date.slice(0, 4) }}</span>
          </p>
          <p class="title">{{ dt.original_name }}</p>
        </div>
      </div>
      <div v-if="loading">
        <HollowDotsSpinner
          :animation-duration="1500"
          :dot-size="15"
          :dots-num="3"
          color="#ff1d5e"
        />
        <p style="color: white" class="please-wait">Please Wait</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { topRated } from "@/api/api";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  name: "Up-Coming",
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  components: {
    HollowDotsSpinner,
  },
  methods: {
    async getDataTopRatedTv() {
      await axios.get(topRated + "&language=en-US&page=2").then((res) => {
        this.data = res.data.results;
        this.data.length = 6;
        this.loading = false;
      });
    },
  },
  async created() {
    this.loading = true;
    try {
      this.getDataTopRatedTv();
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" >
@import "../assets/scss/Global.scss";
</style>

<style lang="scss" scoped>
.hollow-dots-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.please-wait {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  color: white;
  float: left;
  width: calc(21% - 160px);
  margin: 10px 38px;
  position: relative;
  //   height: 400px;

  .add-to-watchlist {
    position: absolute;
    top: 25px;
    left: 5px;
    z-index: 2;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.514);
    color: white;
    border-radius: 20px;
    padding: 5px 10px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transition: 0.2s;
      background-color: rgb(214, 0, 0);
    }
  }

  .blur-image {
    z-index: 0;
    height: 250px !important;
    width: 200px !important;
    margin-bottom: -375px;
    filter: blur(.5rem) !important;
  }

  .wrapper-detail {
    text-align: left;

    .imdb-logo {
      width: 40px !important;
      margin-left: 0;
    }

    .title {
      line-height: 1.4;
      height: 44px;
      max-height: 44px;
    }
    .release-date {
      top: 2px;
      right: 0;
      position: absolute;
      color: #5d6a81;
    }
    .info {
      position: relative;

      .vote-average {
        margin-left: 10px;
        top: 2px;
        position: absolute;
      }
    }
  }

  img:not(.imdb-logo) {
    width: 100%;
    height: 360px !important;
    border-radius: 20px;
    max-height: 360px;
    box-shadow: 2px 15px 20px rgba(0, 0, 0, 0.89);
    z-index: 2 !important;
    filter: blur(0);
  }
}
.card-container {
  position: relative;
  // min-height: 600px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>