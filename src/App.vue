<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Spinner from './components/Spinner'
export default{
  components:{
    Navbar,
    Footer,
    Spinner
  }
}
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  height: 500hv; /*adjust the hiegh and size of the pages here to fit all pages*/
  /* background-color: #c5955b; */
  background-color: #3c4c1c;
}


</style>
