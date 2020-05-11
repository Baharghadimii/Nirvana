<template>
  <div class="dashborad"></div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String,
    subj: String
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 4rem;
}
p {
  font-size: 2rem;
  color: blue;
}
</style>
