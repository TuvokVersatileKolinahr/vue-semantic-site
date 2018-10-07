<template>
  <div class="ui basic modal">
    <div class="ui icon header">
      <i :class="icon" class="icon"></i>
      {{ header }}
    </div>
    <div class="content">
      <p>{{ content }}</p>
    </div>
    <div class="actions">
      <div class="ui red basic cancel inverted button">
        <i class="icon"></i>
        No
      </div>
      <div class="ui green ok inverted button">
        <i class="icon"></i>
        Yes
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

const $: any = jQuery;

@Component({})
export default class Modal extends Vue {
  @Prop()
  private header: string;
  @Prop()
  private content: string;
  @Prop()
  private icon: string;
  private modal: any;

  public open() {
    this.modal
      .modal({
        closable: false,
        onApprove: () => this.modalApprove(),
        onDeny: () => this.modalDeny(),
      })
      .modal('show');
  }

  public close() {
    this.modal.modal('hide');
  }

  private mounted() {
    Vue.$log.debug('mounted modal');
    this.modal = $(this.$el);
  }

  private updated() {
    Vue.$log.debug('mounted updated');
    this.$nextTick(() => {
      Vue.$log.debug('mounted updated nextTick');
      this.modal = $(this.$el);
    });
  }

  @Emit()
  private modalApprove() {
    Vue.$log.debug('Approved');
  }

  @Emit()
  private modalDeny() {
    Vue.$log.debug('Denied');
  }
}
</script>
