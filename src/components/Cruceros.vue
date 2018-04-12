<template>
    <div>
      <h1>Cruceros</h1>
      <h5>Data</h5>
      <pre>
        {{ $data }}
      </pre>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Cruceros',
  mounted(){
      this.getCruceros()
  },
  data() {
      return {
          cruceros: []
          
      }
  },
  methods: {
      getCruceros(){
          axios.get('https://swapi.co/api/starships/')
          .then((res)=>{
              console.log(res)
              this.cruceros= res.data.results
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
