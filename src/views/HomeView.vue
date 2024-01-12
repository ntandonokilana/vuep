<template>
  <div class="home">
    <div class="content">
      <div class="text">
        <h2>Hello, my name is Ntando Nokilana.</h2>
        <p class="animated-text">I am an aspiring <span class="highlight">fullstack</span> Web Developer.</p>
      </div>
      <div class="image-container">
        <img src="https://i.ibb.co/71nftkg/vueIMG.jpg" alt="vueIMG">
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/src/assets/emerald green bacjdrop.jpeg');
  background-size: cover; 
  background-blend-mode: overlay; /* Blend background images */
}

.content {
  display: flex;
  max-width: 800px;
  width: 100%;
}

.text {
  flex: 1;
  padding: 20px;
  text-align: center; /* Center text */
  color: #ffffff; /* Set text color to white */
}

.text h2 {
  margin-bottom: 20px; /* Add margin to separate h2 and p */
}

.image-container {
  flex: 1;
}

img {
  max-width: 100%;
  height: auto;
  display: block; /* Remove extra spacing below image */
}

.animated-text {
  opacity: 0;
  animation: fadeIn 2.5s forwards;
  font-weight: bold; /* Make the p tag bold */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1; /* Correct the typo: 5 to 1 */
  }
}

.highlight {
  color: #2ff004; /* or any color you prefer */
}
</style>