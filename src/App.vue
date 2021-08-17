<template>
  <layout />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Layout from "@/components/Layout.vue"; // @ is an alias to /src

@Options({
  components: {
    Layout,
  },
})
export default class App extends Vue {}
</script>
 
