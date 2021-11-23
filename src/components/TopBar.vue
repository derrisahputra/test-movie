<template>
  <div class="wrapper">
    <div class="fix-position">
      <div class="form-group field">
        <input
          @mouseenter="mouseenter"
          type="input"
          class="form-field"
          placeholder="search"
          name="search"
          v-model="search"
          id="search"
          autocomplete="off"
          required
          @keyup.enter="getAllData"
        />
        <label for="search" class="form-label">Search Your Movie</label>
      </div>

      <div class="watchlist">
        <img
          class="watchlist-icon"
          :src="require('@/assets/images/list.png')"
          alt="Watchlist Icon"
        />
        <span class="watchlist-text">Watchlist</span>
      </div>
    </div>
    <div class="card-search" v-show="show" @mouseleave="show = false">
      <router-link to="#">
        <div class="card" v-for="dt in data" :key="dt.id">
          <img
            :src="'https://image.tmdb.org/t/p/w185/' + dt.poster_path"
            :alt="'Photo of ' + dt.original_title"
          />
          <p>{{ dt.original_title }}</p>
        </div>
      </router-link>
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
import { search } from "@/api/api";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  name: "Top-Bar",
  components: {
    HollowDotsSpinner,
  },
  data() {
    return {
      data: [],
      search: "",
      show: false,
      loading: false
    };
  },
  methods: {
    mouseenter() {
      if (this.search.length !== 0) {
        this.show = true;
      }
    },
    async getAllData() {
      await axios
        .get(search + "&language=en-US&&query=" + this.search)
        .then((res) => {
          this.show = true;
          this.data = res.data.results;
          this.loading = false;
        });
    },
  },
  async created() {
    this.loading = true;
    try {
      this.getAllData();
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>

a {
  text-decoration: none;
  color: black;
}

.wrapper {
  position: relative;
}

.card-search {
  position: absolute;
  top: 80px;
  right: 190px;
  width: 374px;
  max-height: 600px;
  z-index: 999;
  padding: 10px;
  background-color: white;
  overflow: scroll;

  .card {
    text-align: left;
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    overflow: hidden;

    &:hover {
      background-color: rgba(185, 185, 185, 0.301);
    }

    p {
      margin-top: -60px;
      margin-left: 70px;
    }

    img {
      width: 60px;
      border-radius: 3px;
    }
  }
}
.fix-position {
  position: sticky;
  top: 0px;
  z-index: 3;

  $primary: #11998e;
  $secondary: #38ef7d;
  $white: #fff;
  $gray: #9b9b9b;

  .form-group {
    position: absolute;
    padding: 15px 0 0;
    top: 25px;
    right: 200px;
    width: 20%;
  }

  .form-field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form-label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form-field:focus {
    ~ .form-label {
      position: absolute;
      top: -6px;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }
    border-radius: 5px 5px 0 0;
    padding-left: 10px;
    background-color: #10141b;
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
  }
  /* reset input */
  .form-field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  .watchlist {
    position: absolute;
    right: 40px;
    top: 40px;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: black !important;

    img.watchlist-icon {
      width: 20px;
      top: 9px;
      margin-right: 10px;
      position: absolute;
    }
    .watchlist-text {
      margin-left: 30px;
    }
  }
}
</style>