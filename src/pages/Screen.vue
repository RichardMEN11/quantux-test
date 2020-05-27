
<template>
<div class="Screen MatcSreen">
  <div class="Box"></div>
  <div class="Box_1">
    <div class="Column_1">
      <div class="Label">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
      <div class="Button" @click="navigateTo('Screen_1')">Click Me</div>
    </div>
  </div>
</div>
</template>
<style lang="css" scoped>
    @import url("../css/normalize.css");
    @import url("../css/Screen.css");
</style>
<script>
export default {
    name: "Screen",
    mixins: [],
    props: [],
    data: function() {
        return {

        };
    },
    components: {},
    methods: {
        navigateTo (screen) {
            this.$router.push(screen + '.html')
        }
    },
    mounted() {}
};
</script>