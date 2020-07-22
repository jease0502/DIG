<template>
  <div id="page-list">
    <div v-if="activeidx === 0" class="page bg-red">page1</div>
    <div v-if="activeidx === 1" class="page bg-yellow">page2</div>
    <div v-if="activeidx === 2" class="page bg-blue">page3</div>
    <div v-if="activeidx === 3" class="page bg-green">page4</div>
    <div v-if="activeidx === 4" class="page bg-hotpink">page5</div>
  </div>
</template>

<script>
export default {
  props: {
    activeidx: Number
  }
};
</script>

<style>
</style>