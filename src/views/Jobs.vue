<template>
  <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="jobs">
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){        
        return{
            jobs: [],
            erros:[]
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            this.jobs = response.data
        })
        .catch(e => {
            this.erros.push(e);
        })
    }
}
</script>

<style>
.jobs h2{
    background-color:#f4f4f4;
    padding:20px;
    margin: 10px auto;
    border-radius: 10px;
    max-width: 300px;
    cursor:pointer;
    color:#333;
    font-size: 13px;
}

.jobs h2:hover{
     background-color:lightcoral;
     color:#fff;
}
.jobs a{
    text-decoration: none;
}

</style>