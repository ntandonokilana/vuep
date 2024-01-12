<template lang="">
    <div v-for="project in Projects" :key="project.id">
       <p>{{ project.name }}</p>
       <p>{{ project.description}}</p>
       <img :src="project.img" alt="">
     </div>
</template>
<script>
export default {
    computed: {
    Project() {
      return this.$store.state.Project
    },
  }
}
</script>
<style scoped>
    
</style>