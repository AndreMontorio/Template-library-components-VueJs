<template functional>
  <!-- note functional above -->
  <div>
    <div class="container">
      <div class="">
        <div class="col-6 blue vh-50">
          <span>lansa braba </span>
        </div>
        <div class="col-6 red vh-50">
          <span>Xrsquelibrary</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // change this!
  name: "functional-component"
};
</script>

<style lang="scss" scoped>
.blue {
  background: blue !important;
}
.red {
  background: red !important;
}

.container {
  .vh-50 {
    height: 50vh;
  }
}
</style>
