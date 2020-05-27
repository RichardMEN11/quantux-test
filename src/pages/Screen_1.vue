
<template>
<div class="Screen_1 MatcSreen">
  <div class="Label">:)</div>
</div>
</template>
<style lang="css" scoped>
    @import url("../css/normalize.css");
    @import url("../css/Screen_1.css");
</style>
<script>
export default {
    name: "Screen 1",
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