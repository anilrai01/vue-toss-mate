<template>
  <div class="e-profile">
    <h5 class="p-3">Password</h5>
    <div class="f-shape">
      <form>
        <div class="form-group">
          <label for="c-pwd">Current Password *</label>
          <input type="password" class="form-control" id="c-pwd" required />
        </div>
        <div class="form-group">
          <label for="n-pwdi">New Password *</label>
          <input type="password" class="form-control" id="n-pwdi" required />
        </div>
        <div class="form-group">
          <label for="n-pwdii">New Password *</label>
          <input type="password" class="form-control" id="n-pwdii" required />
        </div>
        <div class="form-group">
          <button class="btn cus-btn mt-4">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword"
};
</script>

<style scoped>
.e-profile {
  width: 100%;
  height: auto;
  background: var(--cream);
}

.f-shape {
  width: 80%;
  margin: auto;
  padding: 1rem 0 2rem;
}
h5 {
  border-bottom: 1px solid #ccc;
}
</style>