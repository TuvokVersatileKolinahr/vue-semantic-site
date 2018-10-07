<template>
  <div class="ui three column divided grid">
    <div class="row">
      <div class="center aligned sixteen wide column">
        {{msg}}
      </div>
    </div>
    <div class="row">
      <div class="center aligned column">
        <p><i class="arrow right icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="arrow right icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="arrow down icon"></i></p>
      </div>
    </div>
    <div class="row">
      <div class="center aligned column">
        <p><i class="arrow up icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="recycle icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="arrow down icon"></i></p>
      </div>
    </div>
    <div class="row">
      <div class="center aligned column">
        <p><i class="arrow up icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="arrow left icon"></i></p>
      </div>
      <div class="center aligned column">
        <p><i class="arrow left icon"></i></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
