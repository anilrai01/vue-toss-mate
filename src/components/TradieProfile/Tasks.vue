<template>
  <div class="tradie-task p-3">
    <div class="title-budg d-flex j-sb">
      <h3>Need a logo designed for my transport buisiness</h3>
      <h2 class="font-weight-bold">$300</h2>
    </div>
    <div class="loc-profile d-flex j-sb">
      <div class="location">
        <div class="loc">
          <mdb-icon icon="map-marker-alt" class="text-grey mr-2" />
          <span>Greensborough VIC</span>
        </div>
        <div class="time">
          <mdb-icon icon="calendar" class="text-grey mr-2" />
          <span>Sat, 11 Jun</span>
        </div>
      </div>
      <div class="profile">
        <img
          src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt="Profile"
        />
      </div>
    </div>
    <hr />
    <div class="msg">
      <span class="text-brand font-weight-bold">Open</span>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "TradieTask",
  components: {
    mdbIcon
  }
};
</script>

<style scoped>
.tradie-task {
  background: var(--cream);
  display: flex;
  flex-direction: column;
  border-left: 4px solid var(--brand);
  margin-bottom: 1rem;
  cursor: pointer;
}
.profile {
  width: 4rem;
  height: 4rem;
}
.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>