<template>
    <div>
         <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/projects">Projects</router-link> |
            <router-link to="/testimonials">Testimonials</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

nav {
        text-align: center;
        padding: 10px;
    }

nav a {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>