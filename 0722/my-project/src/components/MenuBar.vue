<template>
  <div id="menuBar">
    <a
      v-for="(item, idx) in menulist"
      href="javascript:;"
      @click="handchangepage(idx)"
      :key="item.id"
    >{{item.name}}</a>
  </div>
</template>

<script>
export default {
  props: {
    menulist: Array,
    handchangepage: Function
  }
};
</script>

<style lang="scss">
#tab-bar {
  width: 350px;
  height: 200px;
  background-color: thistle;
}

#menuBar {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  align-items: center;
}
#menuBar > a {
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
}
#page-list {
  height: 90%;
  background-color: yellowgreen;
}
.page {
  width: 100%;
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-red {
  background-color: red;
}
.bg-yellow {
  background-color: yellow;
}
.bg-blue {
  background-color: blue;
}
.bg-green {
  background-color: green;
}
.bg-hotpink {
  background-color: hotpink;
}
</style>