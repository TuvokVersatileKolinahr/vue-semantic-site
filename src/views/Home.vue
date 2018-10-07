<template>
  <div class="home">
    <img class="ui medium circular image centered" alt="Vue logo" src="../assets/Bridge_Tuvok.jpg">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript + Semantic UI App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
