<template>
    <div>
       <footer>
           <p>&copy; {{ currentYear }}@NtandoNokilana 2024</p>
       </footer>
    </div>
 </template>

 <script>
   export default {
       data() {
           return{
               currentYear: new Date().getFullYear(),
           }
       }
   }
</script>

<style>
   footer {
        background-color: #cdcee4;
        padding: 10px;
        text-align: center;
}

   footer p {
        margin: 0;
        color: #000000;
}
</style>