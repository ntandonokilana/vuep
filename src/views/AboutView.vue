<template>
  <div class="about">
    <h1>ABOUT ME</h1>
    <div class="content-container">
      <p>
        Hello! I'm a tech enthusiast and aspiring coding wiz driven by intellectual challenges. My core interests lie in music,
        writing, film analysis, and recently, coding. In my leisure, I enjoy interactive outdoor activities, African Literature,
        Afrofuturism, music, and movies, while my keen sense of style reflects my self-expression. Living with my family,
        including a tech-savvy nephew, technology is a shared passion and fuels my eagerness to learn more. Looking forward,
        I aspire to make a mark in the film industry, particularly exploring AI for filmmaking and CGI, integrating cutting-edge
        technologies into my creative journey.
      </p>
      <img src="https://i.ibb.co/71nftkg/vueIMG.jpg" alt="vueIMG">
    </div>
  </div>
</template>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 50px auto;
    background-color: greenyellow;
    padding: 20px;
    background-image: url('/src/assets/emerald green bacjdrop.jpeg');
  background-size: cover; 
  }

  h1 {
    align-self: flex-start;
    color: #ffffff;
  }

  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  p {
    flex: 1;
    margin-right: 20px;
    color:#ffffff;
    text-decoration: solid;
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }
</style>