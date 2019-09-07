<template>
  <div>
    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        :style="{width: (itemCount/maxitem)*100 + '%' } "
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <span>{{itemCount}} / {{maxitem}}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["maxitem", "itemCount"]
};
</script>

<style lang="">
</style>