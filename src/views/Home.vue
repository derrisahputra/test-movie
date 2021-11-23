<template>
  <div>
    <TopBar />
    <NowPlaying />
    <UpComing />
    <TopRated />
    <OnTheAir />
  </div>
</template>

<script>
// Component
import TopBar from "@/components/TopBar";
import NowPlaying from "@/components/NowPlaying";
import UpComing from "@/components/UpComing";
import TopRated from "@/components/TopRated";
import OnTheAir from "@/components/OnTheAir";

export default {
  name: "Home",
  components: {
    TopBar,
    NowPlaying,
    UpComing,
    TopRated,
    OnTheAir,
  },
};
</script>