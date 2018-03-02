<template>
  <div id="app">
    <app-header></app-header>
    <router-view :api_key="api_key"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: { AppHeader, AppFooter },
  data () {
    return {
      api_key: 'RGAPI-9ce7b47f-5041-49b7-83a5-f60ace3f1d76',
    }
  },
  methods: {
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
