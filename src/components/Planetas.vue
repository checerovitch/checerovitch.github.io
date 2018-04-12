<template>
    <div>
      <h1>Planetas</h1>
      <h5>Data</h5>
      <pre>
        {{ $data }}
      </pre>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Planetas',
  mounted(){
      this.getPlanetas()
  },
  data() {
      return {
          planetas: []
          
      }
  },
  methods: {
      getPlanetas(){
          axios.get('https://swapi.co/api/planets/')
          .then((res)=>{
              console.log(res)
              this.planetas= res.data.results
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
