<template>
    <div>
    <div class="flip-card-back"></div>
     <div v-for="testimonial in Testimonials" :key="testimonial.id">
       <p>{{ testimonial.name }}</p>
       <p>{{ testimonial.description}}</p>
       <img :src="testimonial.url" alt="">
     </div>
     </div>
  </template>
  <script>
  export default {
    computed: {
    Testimonials() {
      return this.$store.state.testimonials
    },
  }
  
    }
  </script>
  <style scoped>
        /* img{
            max-width: 100%;
            height: auto;
            border-radius: 10px;
        } */    
  </style>