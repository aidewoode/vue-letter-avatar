import Avatar from './Avatar.vue';

const AvatarPlugin = {
  install(Vue) {
    Vue.component('vue-letter-avatar', Avatar);
  }
};

export default AvatarPlugin;
