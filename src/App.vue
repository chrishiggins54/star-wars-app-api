<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      characters: []
    };
  },
  name: 'App',

  methods: {
    handleSearchResults(data) {
      this.characters = data.results;
    }
  }
};
</script>

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');
<style>
body {
  background-image: url('/public/img/star-wars-background.jpeg');
  background-repeat:repeat-y;
  color: #FFFFFF;
}

#app {
  font-family: 'Roboto', sans-serif;
}

</style>
