<template>
  <div>
    <h1>Champions</h1>
		<div class="item-viewer">
			<ul>
				<li v-for="item in champs" v-on:click="showInfo(item)">
					<h4>{{item.name}}</h4>
					<p>({{item.title}})</p>
				</li>
			</ul>
			<div class="rightside" v-show="selected_champs !== null">
				<img v-bind:src="c_icon"/>
				<h4 v-if="selected_champs !== null">{{selected_champs.name}}</h4>
				<p v-if="selected_champs !== null">{{selected_champs.title}}</p>
				<h4>Lore: </h4>
				<p v-if="selected_champs !== null">{{selected_champs.lore}}</p>
				<h4>Spells: </h4>
				<ul v-if="selected_champs !== null">
					<li v-for="spell in selected_champs.spells">
						<h5>{{spell.name}}</h5>
						<p>{{spell.description}}</p>
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
import champs from '../../static/data/champions.json'
export default {
	props:["api_key"],
  name: 'Champions',
  data () {
    return {
      champs: champs.data,
			selected_champs: null,
			c_icon: '',
		}
  },
  created: function() {
		console.log('created champs');
    this.getChamps();
  },
  methods: {
    getChamps: function() {
			console.log('Still using static data');
			/*
			fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false?api_key=' + this.api_key)
			.then(response => {
        return response.json();
      }).then(json => {
        this.champs = json.data;
        return true;
      }).catch(err => {
				return false;
      }); */
    },
		showInfo: function(champ) {
			this.selected_champs = champ;
			this.getChampImage(champ.image.full);
		},
		getChampImage: function(icon) {
			this.c_icon = 'https://ddragon.leagueoflegends.com/cdn/7.10.1/img/champion/' + icon;
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
	padding-left: 0.5em;
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
	display: flex;
	align-items: center;
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
