<template>
  <layout>
    <template v-slot:top>
      <Header />
    </template>
    <template v-slot:left>
      <Navigator />
    </template>
    <template v-slot:center>
      <Content />
    </template>
  </layout>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header/index.vue";
import Navigator from "@/components/Navigator/index.vue";
import Content from "@/components/Content.vue";

@Options({
  components: {
    Layout,
    Navigator,
    Header,
    Content,
  },
})
export default class App extends Vue {}
</script>
 
