import Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $log: {
      debug(message: string, trace?: {}): void;
      info(message: string, trace?: {}): void;
      warning(message: string, trace?: {}): void;
      error(message: string, trace?: {}): void;
      fatal(message: string, trace?: {}): void;
    };
  }
}
