<template>
  <div id="app">
    <div class="ui fixed inverted borderless menu">
      <navigation></navigation>
    </div>
    <div class="ui main text container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.ui.menu .item img.logo {
  margin-right: 1.5em;
}
.main.container {
  margin-top: 7em;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class App extends Vue {}
</script>
