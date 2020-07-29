<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Hero />
    <WorkProcess />

    <Banner class="mt-5" :img_url="sendNewbannerTrio">
      <BannerJobs />
    </Banner>

    <!-- New section One  -->
    <div class="what-are-other-doing">
      <img :src="returnImage" alt class="modelImg" />
      <h1 class="text-brand2 font-weight-bold text-left z-2 mb-5">What are others doing?</h1>
      <div class="new-big-card mb-5 w-100">
        <VueSlickCarousel v-bind="big_settings">
          <ProfileCard big v-for="(card, index) in wodProfile[0]" :key="index" :img="card.img_url" />
        </VueSlickCarousel>
      </div>
      <div class="new-small-card">
        <VueSlickCarousel v-bind="small_settings">
          <ProfileCard med v-for="(card, index) in wodProfile[1]" :key="index" :img="card.img_url" />
        </VueSlickCarousel>
      </div>
    </div>
    <!-- New Section Two -->
    <Banner :img_url="returnSecImg">
      <div class="banner-testimonial">
        <div class="green-mask"></div>

        <h1 class="text-white font-weight-bold text-center">What they have to say ?</h1>
        <div class="new-testimonials">
          <VueSlickCarousel v-bind="testimonials_settings">
            <div class="testi-card">
              <img
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                alt
              />

              <h3 class="font-weight-bold mt-4 mb-3">John Doe</h3>
              <p class="text-justify text-grey">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolorum culpa architecto
                voluptatem accusanti
              </p>
            </div>
            <div class="testi-card">
              <img
                src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt
              />

              <h3 class="font-weight-bold mt-4 mb-3">John Doe</h3>
              <p class="text-justify text-grey">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolorum culpa architecto
                voluptatem accusanti
              </p>
            </div>
            <div class="testi-card">
              <img
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                alt
              />

              <h3 class="font-weight-bold mt-4 mb-3">John Doe</h3>
              <p class="text-justify text-grey">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolorum culpa architecto
                voluptatem accusanti
              </p>
            </div>
            <div class="testi-card">
              <img
                src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
                alt
              />

              <h3 class="font-weight-bold mt-4 mb-3">John Doe</h3>
              <p class="text-justify text-grey">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolorum culpa architecto
                voluptatem accusanti
              </p>
            </div>
            <div class="testi-card">
              <img
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                alt
              />

              <h3 class="font-weight-bold mt-4 mb-3">John Doe</h3>
              <p class="text-justify text-grey">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolorum culpa architecto
                voluptatem accusanti
              </p>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </Banner>
    <!-- New Section Three -->
    <!-- Browse Exclusive Category -->
    <div class="browse-ex-cat container">
      <h3 class="font-weight-bold">Browse our extensive categories</h3>
      <div class="cat-list">
        <div class="list-col" v-for="(list, index) in categoryList" :key="index">
          <h5 class="font-weight-bold">{{ list.title }}</h5>
          <p v-for="(listt, index) in list.links.slice(0, 9)" :key="index">{{ listt }}</p>
        </div>
      </div>
    </div>

    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero";
import Banner from "../components/Banner";
import BannerJobs from "../components/Home/Banner-JobsCount";
import WorkProcess from "../components/Home/WorkProcess";
import NewsLetter from "../components/Home/NewsLetter";
import Footer from "../components/Footer";
import NewBannerTrio from "../assets/newBannerTrio.png";
import ProfileCard from "../components/Home/ProfileCard";
import rectImage from "../assets/bigBG.png";
import newSecImg from "../assets/newSecondSection.png";
import { mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Home",
  components: {
    Hero,
    Banner,
    BannerJobs,
    WorkProcess,
    ProfileCard,
    NewsLetter,
    Footer,
    VueSlickCarousel,
  },
  computed: {
    ...mapGetters(["getDropdown2"]),
    sendNewbannerTrio() {
      return NewBannerTrio;
    },
    returnImage() {
      return rectImage;
    },
    returnSecImg() {
      return newSecImg;
    },
    categoryList() {
      let cat = this.getDropdown2.slice(0, 4);
      return cat;
    },
  },
  data() {
    return {
      wodProfile: [
        [
          {
            img_url:
              "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
          },
        ],
        [
          {
            img_url:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
          },

          {
            img_url:
              "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          },
          {
            img_url:
              "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80",
          },
        ],
      ],
      big_settings: {
        arrows: false,
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 15000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: false,
        // centerMode: true,
      },
      small_settings: {
        arrows: false,
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 15000,
        slidesToShow: 5,
        slidesToScroll: -1,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: false,
        // centerMode: false,
      },
      testimonials_settings: {
        autoplay: true,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: "slick-dots testi-dots",
      },
    };
  },
};
</script>

<style scoped>
.what-are-other-doing {
  position: relative;
  background: #f5f5f5;
  padding: 7rem 1rem;
  overflow: hidden;
}
.what-are-other-doing h1 {
  position: relative;
  width: 22rem;
  margin-left: auto;
  font-size: 3rem;
  font-weight: 800;
}
.modelImg {
  position: absolute;
  top: -45%;
  right: -28%;
  transform: scale(0.7);
}

.slick-initialized .slick-list .slick-track .slick-slide {
  margin: 0 3rem !important;
}

.banner-testimonial {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner-testimonial * {
  z-index: 10;
}
.testimonials {
  margin-top: 3rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.new-testimonials {
  margin-top: 3rem;
  width: 75%;
}
.testi-card {
  background: #fff;
  width: 20rem !important;
  height: 25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.testi-card h3 {
  text-align: center;
}
.testi-card img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
}
.browse-ex-cat {
  margin: 5rem;
}
.cat-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
}
.testi-dots li {
  background: #fff;
}
.testi-dots li button:before {
  color: #fff !important;
}
.testi-dots li.slick-active button:before {
  opacity: 0.75;
  color: #fff !important;
}
</style>
