<template>
  <div class="fix-position">
    <div class="watchlist">
      <img
        class="watchlist-icon"
        :src="require('@/assets/images/list.png')"
        alt="Watchlist Icon"
      />
      <span class="watchlist-text">Wacthlist</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fix-position {
  position: sticky;
  top: 0px;
  z-index: 3;

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