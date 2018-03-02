<template>
  <div>
    <h1>Champions</h1>
		<form v-on:submit.prevent="doSearch">
      <input type="text" v-model="phrase">
      <button type="submit">Search</button>
    </form>
		<br>
		<div class="item-viewer">
			<ul>
				<li v-for="item in filtered_champs" v-on:click="showInfo(item)">
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
			filtered_champs: champs.data,
			selected_champs: null,
			c_icon: '',
			phrase: '',
		}
  },
  created: function() {
		console.log('created champs');
  },
	watch: {
    phrase: function(value,oldvalue) {
      if (value !== '') {
        this.doSearch(value);
      }else {
        this.filtered_champs = this.champs;
      }
    },
  },
  methods: {
		showInfo: function(champ) {
			this.selected_champs = champ;
			this.getChampImage(champ.image.full);
		},
		getChampImage: function(icon) {
			this.c_icon = 'https://ddragon.leagueoflegends.com/cdn/7.10.1/img/champion/' + icon;
		},
		doSearch: function() {
			this.filtered_champs = {};
			let uncase = '';
			for (let key in this.champs) {
				uncase = key.toLowerCase();
				if (uncase.indexOf(this.phrase) !== -1) {
					this.filtered_champs[key] = this.champs[key];
				}
			}
			this.selected_champs = null;
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
