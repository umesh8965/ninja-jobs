<template>
  <h1>Job Details</h1>
  This is job details page and ID is <span style="font-weight:bold">{{ id }}</span>
</template>

<script>
export default {
    props:[
        'id'
    ]
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>


</style>