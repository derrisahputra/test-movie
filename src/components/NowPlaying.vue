<template>
  <div>
    <carousel
      :per-page="1"
      :autoplay="true"
      :loop="true"
      :mouseDrag="false"
      :autoplayHoverPause="false"
      :autoplayTimeout="9000"
      :speed="1000"
      :paginationPadding="0"
      :paginationEnabled="false"
    >
      <slide v-for="dt in data" :key="dt.id">
        <div class="wrapper-image">
          <div class="wrapper-movie-detail">
            <div class="movie-detail">
              <h4 class="now-playing">
                <span class="livenow">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </span>
                NOW PLAYING
              </h4>
              <h1 class="title">{{ dt.original_title }}</h1>
              <img
                class="imdb-logo"
                :src="require('@/assets/images/imdb.png')"
                alt="IMDB Logo"
              />
              <div class="vote">
                <span class="vote-number">{{ dt.vote_average }}</span>
                <span class="max-vote">/ 10</span>
                <span class="vote-count">({{ dt.vote_count }} reviews)</span>
              </div>
              <div class="date">
                Release date
                <span class="release-date"> {{ dt.release_date }}</span>
              </div>
              <p class="overview">{{ dt.overview }}</p>
              <a href="#" class="btn-view">View</a>
            </div>
          </div>
          <div class="overlay"></div>
          <div class="slider-container"></div>
          <img
            :src="'https://image.tmdb.org/t/p/original/' + dt.backdrop_path"
            :alt="'Poster of ' + dt.original_title"
          />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import { nowPlaying } from "@/api/api";

export default {
  name: "Now-Playing",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      data: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get(nowPlaying + "&language=en-US&page=1")
      .then((res) => {
        this.data = res.data.results;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style lang="scss" >
@import "../assets/scss/Global.scss";
</style>

<style lang="scss" scoped>
@font-face {
  font-family: "passsion";
  src: url("../assets/fonts/passion-one/PassionOne-Regular.ttf");
}

.VueCarousel {
  height: 100vh;
}

img {
  width: 100%;
  //   object-fit: cover;
}

.wrapper-image {
  height: 100vh;
  position: relative;
  overflow: hidden;

  .wrapper-movie-detail {
    width: 35%;
    height: 100%;
    border-radius: 0 100px 0 0;
    position: absolute;
    z-index: 1;

    .movie-detail {
      margin-top: 60px;
      z-index: 1;
      color: white;
      opacity: 1;
      position: relative;
      margin-left: 70px;
      margin-right: 30px;
      text-align: left;
      height: 100vh;

      .now-playing {
        .livenow {
          width: 30px;
          display: inline-block;
        }
        .livenow > div {
          vertical-align: middle;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          position: absolute;
          margin-top: -17px;
          //   margin: 0 auto;
          border: 3px solid rgb(255, 0, 0);
          -webkit-animation: live 1.4s infinite ease-in-out;
          animation: live 1.4s infinite ease-in-out;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        &:nth-child(4) {
          border: 3px solid rgba(255, 255, 255, 1);
          -webkit-animation-delay: -0.42s;
          animation-delay: -0.42s;
        }
      }

      @-webkit-keyframes live {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0.6);
        }
        40% {
          -webkit-transform: scale(1);
        }
      }
      @keyframes live {
        0%,
        80%,
        100% {
          transform: scale(0.6);
          -webkit-transform: scale(0.6);
        }
        40% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
      }

      .btn-view {
        text-decoration: none;
        position: absolute;
        background-color: #ffffff;
        padding: 10px 40px;
        color: #10141b;
        font-size: 18px;
        border-radius: 10px;
        bottom: 135px;
        right: 0;
        box-shadow: 0 10px 20px #151822;
      }

      .overview {
        color: #e2e2e2;
        line-height: 1.5;
        font-size: 17px;
        margin-top: 30px;

        &::first-letter {
          font-size: 30px;
        }
      }

      .imdb-logo {
        margin-top: 10px;
        width: 50px !important;
      }

      .title {
        color: #ffffff;
        opacity: 1 !important;
        font-size: 85px;
        font-weight: 400;
        font-family: "passsion";
        z-index: 1;
      }

      .date {
        margin-top: 15px;

        .release-date {
          padding: 10px;
          background-color: rgb(7, 8, 14);
          border-radius: 5px;
        }
      }

      .vote {
        margin-top: 10px;
        font-weight: bold;

        .vote-number {
          font-size: 60px;
          color: #e1b31e;
        }
        .max-vote {
          font-size: 20px;
          margin-left: 10px;
        }
        .vote-count {
          margin-left: 10px;
          font-weight: normal;
        }
      }
    }
  }

  .overlay {
    width: 35%;
    height: 100%;
    border-radius: 0 100px 0 0;
    position: absolute;
    background: #10141b;
    opacity: 0.8;
  }
}
</style>