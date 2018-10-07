<template>
    <div class="ui container">
      <router-link to="/" class="header borderless item">
        <img src="../assets/logo.png" class="logo">
        <span class="title">T.V.K. Fratoj</span>
      </router-link>
      <div v-if="authenticated" class="ui simple dropdown item right">
        <i class="cog icon"></i> <i class="caret down icon"></i>
        <div class="ui borderless menu">
          <router-link to="about" class="item">About</router-link>
          <div @click="logoutDialog" class="item">Logout</div>
        </div>
      </div>
      <div v-if="!authenticated" class="ui item right">
        <router-link to="login" class="item">
          <i class="sign-in icon"></i>
        </router-link>
      </div>

      <modal icon="sign-out" header="Logout" :content="modalContent"
            ref="modal" @modal-approve="logoutAction" @modal-deny="noop"></modal>
    </div>
</template>

<style lang="scss" scoped>
.title {
  margin-left: 1.5em;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import Component from 'vue-class-component';
import Modal from '@/components/Modal.vue';

@Component({
  computed: {
    ...mapState('login', ['authenticated']),
  },
  methods: {
    ...mapMutations('login', {
      logout: 'logout,',
    }),
  },
  components: { Modal },
})
export default class Navigation extends Vue {
  private modalContent: string = 'Really log out?';
  private logoutAction() {
    this.$store.commit('login/logout');
  }
  private logoutDialog() {
    (this.$refs.modal as Modal).open();
  }
  private noop() {
    (this.$refs.modal as Modal).close();
  }
}
</script>
