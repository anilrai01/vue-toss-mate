<template>
  <div class="category-cover my-5">
    <mdb-container class="my-5">
      <h3>Browse Popular Categories</h3>
      <ul class="mt-5">
        <li>
          <mdb-icon icon="home mr-1" />Household
        </li>
        <li>
          <mdb-icon icon="tools mr-1" />Trade
        </li>
        <li>
          <mdb-icon icon="briefcase mr-1" />Business
        </li>
        <li>
          <mdb-icon icon="palette mr-1" />Creative
        </li>
        <li>All</li>
      </ul>

      <div class="task-list my-4">
        <div class="task my-3" v-for="task in tasks" :key="task.taskID">
          <div class="task-img" :style="computeUrl(task.taskImg)"></div>
          <div class="task-desc my-2">{{ task.taskDesc }}</div>
        </div>
      </div>
      <mdb-btn class="cus-btn">See more Categoreies</mdb-btn>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbIcon, mdbBtn } from "mdbvue";
export default {
  name: "BrowseCategory",
  components: {
    mdbContainer,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      tasks: [
        {
          taskID: 10,
          taskImg:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
          taskDesc: "Architect"
        },
         {
          taskID: 9,
          taskImg:
            "https://images.unsplash.com/photo-1559879625-05fa2eefd230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
          taskDesc: "Air Conditioner"
        },
        {
          taskID: 1,
          taskImg:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          taskDesc: "Cleaning"
        },
        {
          taskID: 2,
          taskImg:
            "https://images.unsplash.com/photo-1580709839515-54b8991e2813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80",
          taskDesc: "Room Shifting"
        },
        {
          taskID: 3,
          taskImg:
            " https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          taskDesc: "Plumbing"
        },
        {
          taskID: 4,
          taskImg:
            "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          taskDesc: "Electrician"
        },
        {
          taskID: 5,
          taskImg:
            "https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          taskDesc: "Construction"
        },
        {
          taskID: 6,
          taskImg:
            "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
          taskDesc: "Photographer"
        },
        {
          taskID: 7,
          taskImg:
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
          taskDesc: "Carpet Cleaning"
        },
        {
          taskID: 8,
          taskImg:
            "https://images.unsplash.com/photo-1555955207-b96159c16808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          taskDesc: "Gardening"
        },
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
.category-cover {
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: #eee;
}
h3 {
  font-weight: bold;
  /* color: #1D2F6F; */
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
li {
  margin-right: 1.5rem;
  cursor: pointer;
}
.task-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.task-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 16rem;
  height: 12rem;
}
.task-desc {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
