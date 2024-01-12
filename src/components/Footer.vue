<template >
    <footer>
        <p>&copy; {{ currentYear }} Ntando Nokilana</p>
        <div>
            <i class="fa fa-github-square" aria-hidden="true"></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
    </footer>
</template>

  <script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
    background-color:rgb(164, 139, 13);
    color: #fff;
    text-align: center;
    padding: 5px;
    bottom: 0px;
}
</style>