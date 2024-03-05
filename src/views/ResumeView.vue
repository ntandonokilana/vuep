<template>
    <div>
      <h1>Resume</h1>
      <div v-if="resume.length === 0">No resume information available</div>
      <div v-else>
        <!-- Display education, skills, work experience, etc. -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['resume']),
  },
  methods: {
    ...mapActions(['resumeProjects']),
  },
  mounted() {
    this.fetchResume();
  },
};
  </script>