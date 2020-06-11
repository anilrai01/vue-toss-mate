<template>
  <div id="edit-profile">
    <form>
      <!-- first-div -->
      <div class="profile">
        <h5 class="p-3">Profile</h5>
        <div class="f-shape">
          <div class="form-group">
            <label for="f-name">First Name : *</label>
            <input type="text" class="form-control" id="f-name" required />
          </div>
          <div class="form-group">
            <label for="l-name">Last Name : *</label>
            <input type="text" class="form-control" id="l-name" required />
          </div>
          <div class="form-group">
            <label for="dob">Birth Date: *</label>
            <div class="dob-data">
              <select name="day" id="dob" class="form-control">
                <option value disabled selected>Day</option>
              </select>
              <select name="month" id="dob" class="form-control">
                <option value disabled selected>Month</option>
              </select>
              <select name="year" id="dob" class="form-control">
                <option value disabled selected>Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- second div -->
      <div class="contact mt-4">
        <h5 class="p-3">Contact</h5>
        <div class="f-shape">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="phone" class="form-control" id="phone" required />
          </div>
        </div>
      </div>
      <!-- third div -->
      <div class="address mt-4">
        <h5 class="p-3">Address</h5>
        <div class="f-shape flex-row">
          <div class="form-group">
            <label for="s-name">Street Name:</label>
            <input type="text" class="form-control" id="s-name" required />
          </div>
          <div class="form-group">
            <label for="s-num">Street Number:</label>
            <input type="number" class="form-control" id="s-num" required />
          </div>
        </div>
      </div>
      <!-- button div -->
      <div class="button-div my-4 p-4">
        <button class="btn cus-btn px-5 py-2">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProfile"
};
</script>

<style scoped>
.profile,
.contact,
.address,
.button-div {
  width: 100%;
  height: auto;
  background: var(--brandDivs);
}
h5 {
  border-bottom: 1px solid #ccc;
}
.f-shape {
  width: 80%;
  margin: auto;
  padding: 1rem 0 2rem;
}
.dob-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dob-data select {
  flex-basis: 30%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex-row .form-group {
  flex-basis: 45%;
}
</style>