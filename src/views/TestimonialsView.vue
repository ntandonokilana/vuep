<template>
    <div>
      <h1>Testimonials</h1>
      <div v-if="testimonials.length === 0">No testimonials available</div>
      <div v-else>
        <div v-for="(testimonial, index) in testimonials" :key="index">
          <h2>{{ testimonial.name }}</h2>
          <p>{{ testimonial.description }}</p>
          <p>Job: {{ testimonial.job }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['testimonials']),
  },
  methods: {
    ...mapActions(['fetchTestimonials']),
  },
  mounted() {
    this.fetchTestimonials();
  },
};
  </script>