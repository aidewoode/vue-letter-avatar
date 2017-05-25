<template>
<div>
  <div>test</div>
  <div v-for='letter of allLetter'>
    <vue-letter-avatar size='20' :name='letter' :rounded=true />
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      allLetter: 'abcdefghijklmnopqrstuvwxyz'
    };
  }
};
</script>
