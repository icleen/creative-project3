<template>
  <div>
    <h1>Profile</h1>
    <p>not finished yet</p>
  </div>
</template>

<script>
import masteries from '../../static/data/faker.json'
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
  },
  methods: {
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
