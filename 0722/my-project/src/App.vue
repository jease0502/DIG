<template>
  <div id="app">
    <div id="tab-bar">
      <MenuBar :menulist="menuArr" :handchangepage="handChangePage" />
      <PageList :activeidx="activeIdx" />
    </div>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import PageList from "./components/Pagelist.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    MenuBar,
    PageList
  },
  data() {
    return {
      activeIdx: 0,
      menuArr: [
        { name: "選項1", id: "a" },
        { name: "選項2", id: "b" },
        { name: "選項3", id: "c" },
        { name: "選項4", id: "d" },
        { name: "選項5", id: "e" }
      ]
    };
  },
  watch: {
    activeIdx() {
      console.log("換頁");
    }
  },
  methods: {
    handChangePage(idx) {
      this.activeIdx = idx;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
