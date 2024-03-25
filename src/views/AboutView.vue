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
      <div><img src="https://i.ibb.co/F4xv1vK/nontando.jpg" alt="vueIMG">
      </div>      
    </div>
  </div>
</template>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 50px;
    color: white;
  }

  h1 {
    color: white;
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
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }

  .content-contanier{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      opacity: 0;
      animation-name: slide-in;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      color: aliceblue;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
  }
    @keyframes slide-in {
      0% {
        transform: translateX(-50%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
  }
</style>