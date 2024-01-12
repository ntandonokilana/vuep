<template lang="">
    <div>
            <div v-for="resume in resume" :key="resume.id">
            <p>{{ resume.name }}</p>
            <p>{{ resume.description}}</p>
     </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>
