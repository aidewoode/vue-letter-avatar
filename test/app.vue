<template>
<div>
  <span v-for='letter of allLetter'>
    <vue-letter-avatar class='letter-avatar' :name='letter' :rounded=true />
  </span>
</div>
</template>
<style scope>
.letter-avatar {
  margin: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      allLetter: 'abcdefghijklmnopqrstuvwxyz'
    };
  }
};
</script>
