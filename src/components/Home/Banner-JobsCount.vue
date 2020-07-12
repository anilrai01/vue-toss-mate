<template>
  <div class="banner-job">
    <div class="green-mask"></div>
    <h1 class="text-white font-weight-bold font-helvNeue">What needs to be done ?</h1>
    <div class="s-row mt-4">
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('plumber')" class="svg-i-icon"></object>
        </div>
        <h6>Plumbing</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object
            type="image/svg+xml"
            :data="showIcon('electrician')"
            class="svg-i-icon"
          >Electrician</object>
        </div>
        <h6>Electrician</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('painting')" class="svg-i-icon">Paining</object>
        </div>
        <h6>Painting</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('repair')" class="svg-i-icon">Repairing</object>
        </div>
        <h6>Repairing</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('gardening')" class="svg-i-icon">Gardening</object>
        </div>
        <h6>Gardening</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('ac')" class="svg-i-icon">Ac</object>
        </div>
        <h6>Air Conditioning</h6>
      </div>
      <div class="s-col">
        <div class="svg-icon">
          <object type="image/svg+xml" :data="showIcon('moving')" class="svg-i-icon">Moving</object>
        </div>
        <h6>Moving</h6>
      </div>
    </div>
  </div>
</template>

<script>
import PlumberIcon from "../../assets/Icon map-plumber.svg";
import ElectricianIcon from "../../assets/Icon map-electrician.svg";
import Painting from "../../assets/Icon awesome-paint-roller.svg";
import Repairing from "../../assets/Icon ionic-ios-construct.svg";
import Ac from "../../assets/Icon awesome-air-freshener.svg";
import Moving from "../../assets/Icon awesome-truck-moving.svg";
import Gardening from "../../assets/Icon material-nature.svg";

export default {
  name: "BannerJobs",
  computed: {},
  methods: {
    showIcon(icon) {
      switch (icon) {
        case "plumber":
          return PlumberIcon;
        case "electrician":
          return ElectricianIcon;
        case "painting":
          return Painting;
        case "repair":
          return Repairing;
        case "gardening":
          return Gardening;
        case "ac":
          return Ac;
        case "moving":
          return Moving;
        default:
          return "";
      }
    }
  }
};
</script>

<style scoped>
.banner-job {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-job h1 {
  margin-bottom: 4rem;
}
.s-row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13%, 1fr));
}
.s-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.s-col .svg-icon {
  flex-basis: 80%;
}
.s-col h6 {
  flex-basis: 20%;
  font-weight: bold;
}
h3 {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.col {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
h6 {
  color: #ebebeb;
}

/* .f1 {
  color: #35A7FF;
}
.f2 {
  color: #FF5964;
}
.f3 {
  color: #FFE74C;
} */
.f1,
.f2,
.f3 {
  color: #fff;
}

/* SVG Icon */
.svg-icon {
  position: relative;
  transform: scale(0.8);
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.svg-icon object {
  z-index: 5;
}
.svg-icon::before {
  content: "";
  position: absolute;
  width: 7rem;
  height: 7rem;
  background: rgba(60, 143, 26, 0.7);
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
}
.s-col:hover .svg-icon::before {
  transform: rotate(-45deg);
}
.s-col:hover .svg-i-icon svg path {
  fill: rgba(60, 143, 26, 0.7);
}
</style>