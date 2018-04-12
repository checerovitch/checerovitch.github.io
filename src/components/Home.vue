<template id="cl">
    <div>
      <h1>Home</h1>
      <h5>Data</h5>
        <ul>
          <li v-for="film in films" :key="film.episode_id">
            <figure>
              <img :src="'films/'+film.title.split(' ').join(' ').toLowerCase() + '.jpg'"
              :alt="film.title" width="304" height="228"/>
              <figcaption>{{ film.opening_crawl }}</figcaption>
            </figure>
          </li>
        </ul>
      <pre>
        {{ $data }}
      </pre>
      
    </div>
</template>

<script>
alert("Abandona aquí toda esperanza")
import axios from 'axios'
export default {
  name: 'Home',
  mounted(){
      this.getFilms()
  },
  data() {
      return {
          films: [],
          
      }
  },
  methods: {
      getFilms(){
          axios.get('https://swapi.co/api/films')
          .then((res)=>{
              console.log(res)
              this.films= res.data.results
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    background-color: darkolivegreen;
    border-radius: 16%;
    color:whitesmoke;
    border-width: 0px;
    border: 0px solid darkolivegreen;
    padding:  0em 1em;
}
#cl {
    background-color: black;
}



</style>
