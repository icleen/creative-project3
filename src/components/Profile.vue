<template>
  <div>
    <h1>Profile</h1>
    <p>(Soon to come: get your own info)</p>
    <h3>Summoner Name: Hide on Bush</h3>
    <ul>
      <li v-for="mast in masteries">
        <img v-bind:src="getChampImage(idToName(mast.championId))"/>
        <h4>Champion: {{idToName(mast.championId)}}</h4>
        <p>Champion Mastery: {{mast.championLevel}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import masteries from '../../static/data/faker.json'
import champs from '../../static/data/champions.json'
export default {
  props:["api_key"],
  name: 'Profile',
  data () {
    return {
      masteries: masteries,
      champs: champs.data,
    }
  },
  created: function() {
    console.log('created profile');
    /*let tmp = masteries[0];
    let name = this.idToName(tmp.championId);*/
  },
  methods: {
    idToName: function(id) {
      for (let key in this.champs) {
        if (id === this.champs[key].id) {
          return key;
        }
      }
      return null;
    },
    getChampImage: function(name) {
      let icon = this.champs[name].image.full;
			return 'https://ddragon.leagueoflegends.com/cdn/7.10.1/img/champion/' + icon;
		},
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
	padding-left: 0em;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 0;
}
li {
	background: #f3f3f3;
	width: 500px;
	min-height: 30px;
	padding: 10px;
	margin-bottom: 10px;
	font-size: 1em;
	align-items: center;
  display: flex;
  justify-content: space-around;
}
a {
  color: #42b983;
}

.item-viewer {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.rightside li {
	background: grey;
	color: white;
	display: inline-block;
	padding: 0em 1em 0em 1em;
}
</style>
