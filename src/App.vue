<template>
  <div id="app">
    <Admin msg="App Chuco Lacostado!!!" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Admin from "./components/Admin.vue";

@Component({
  components: {
    Admin,
  },
})
export default class App extends Vue {}
</script>
