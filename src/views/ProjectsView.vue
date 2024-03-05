<template>
    <div class="projects">
      <h1>Projects</h1>
      <div v-if="projects.length === 0">No projects available</div>
      <div v-else>
        <div v-for="(project, index) in projects" :key="index" class="project">
          <h2>{{ project.name }}</h2>
          <p>GitHub: <a :href="project.github">{{ project.github }}</a></p>
          <p>Vercel: <a :href="project.vercel">{{ project.vercel }}</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['projects']),
  },
  methods: {
    ...mapActions(['fetchProjects']),
  },
  mounted() {
    this.fetchProjects();
    this.fetchTestimonials();
  },
};
  </script>
  
  <style scoped>
  .projects {
    text-align: center;
  }
  
  .project {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .project h2 {
    margin-bottom: 5px;
  }
  
  .project a {
    color: blue;
  }
  </style>
  