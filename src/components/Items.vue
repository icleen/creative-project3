<template>
  <div>
    <h1>Items</h1>
    <form v-on:submit.prevent="doSearch">
      <input type="text" v-model="phrase">
      <button type="submit">Search</button>
    </form>
		<br>
    <div class="item-viewer">
      <ul>
        <li v-for="item in filtered_items" v-on:click="showInfo(item)">
          <h4>{{item.name}}</h4>
        </li>
      </ul>
      <div class="rightside" v-show="selected_items !== null">
				<img v-bind:src="c_icon"/>
				<h4 v-if="selected_items !== null">{{selected_items.name}}</h4>
        <p v-if="selected_items !== null">Cost: {{selected_items.gold.base}}</p>
        <p v-if="selected_items !== null">{{selected_items.plaintext}}</p>
        <p v-if="selected_items !== null">{{selected_items.sanitizedDescription}}</p>
			</div>
    </div>
  </div>
</template>

<script>
import items from '../../static/data/items.json'
export default {
  props:["api_key"],
  name: 'Items',
  data () {
    return {
      items: items.data,
      filtered_items: items.data,
      selected_items: null,
      c_icon: '',
      phrase: '',
    }
  },
  created: function() {
    console.log('created items');
  },
  watch: {
    phrase: function(value,oldvalue) {
      if (value !== '') {
        this.doSearch(value);
      }else {
        this.filtered_items = this.items;
      }
    },
  },
  methods: {
    showInfo: function(item) {
      this.selected_items = item;
      this.getImage(item.image.full);
    },
    getImage: function(icon) {
      this.c_icon = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/' + icon;
    },
    doSearch: function() {
			this.filtered_items = {};
			let uncase = '';
			for (let key in this.items) {
				uncase = this.items[key].name.toLowerCase();
				if (uncase.indexOf(this.phrase) !== -1) {
					this.filtered_items[key] = this.items[key];
				}
			}
			this.selected_items = null;
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
