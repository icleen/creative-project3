<template>
  <div id="app">
    <app-header></app-header>
    <router-view :api_key="api_key"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: { AppHeader },
  data () {
    return {
      api_key: 'RGAPI-9ce7b47f-5041-49b7-83a5-f60ace3f1d76',
    }
  },
  methods: {
    signin: function() {
      console.log(AppHeader.id);
      fetch('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + AppHeader.id + '?api_key=' + this.api_key).then(response => {
        return response.json();
      }).then(json => {
        this.current = json;
        this.loading = false;
        this.number = json.num;
        return true;
      }).catch(err => {
        this.number = this.max;
      });
    },
  },
}
</script>

<style>
body {
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
