<template>
  <mdb-container class="my-5">
    <h2 class="my-5">What they have to say?</h2>
    <div class="test-cont">
      <div class="testimon" v-for="testimonial in testimonials" :key="testimonial.testID">
        <div class="test-head">
          <div class="test-img" :style="computeUrl(testimonial.testImg)"></div>
          <div class="test-name">
            <h3>{{testimonial.testName}}</h3>
            <h5>Sydney</h5>
          </div>
        </div>
        <div class="test-body">
          <p>{{testimonial.testMsg}}</p>
        </div>
      </div>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from "mdbvue";
export default {
  name: "Testimonials",
  components: {
    mdbContainer
  },
  data() {
    return {
      testimonials: [
        {
          testID: 1,
          testImg:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          testName: "Layra",
          testMsg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        },
        {
          testID: 2,
          testImg:
            "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          testName: "John",
          testMsg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        },
        {
          testID: 3,
          testImg:
            "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80",
          testName: "Stella",
          testMsg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        }
      ]
    };
  },
  methods: {
    computeUrl(img) {
      return {
        "background-image": `url(${img})`
      };
    }
  }
};
</script>

<style scoped>
h2 {
  font-weight: bold;
}
h3 {
  font-size: 1.3rem;
  font-weight: bold;
}
.test-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.testimon {
  width: 30%;
}
.test-head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.test-img {
  background-image: url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
}
.test-body {
  margin-top: 1rem;
  text-align: justify;
}
</style>