<template lang="">
     <div class="Contact-form">
        <h1>Contact Me!</h1>
        <form>
            <label for="email">Full Name</label>
            <input type="fullname" id="fullname" name="fullname" placeholder="Your Full Name" required>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required>
            <label for="Message">Message</label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    nav {
            background-color:limegreen;
            color: #fff;
            text-align: center;
            padding: 10px;
    }

    .Contact-form {
            background-color: rgb(0, 129, 0);
            width: 50%;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: black;
    }
     h1 {
        text-align: center;
        color: black;
    }

    form {
          display: flex;
          flex-direction: column;
    }

    label {
            font-weight: bold;
            color: black;
    }
    input {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
    }
    textarea {
            height: 100px;
            resize: vertical; 
    }

    button {
         background-color: rgb(25, 201, 25);
            color: #fff;
            padding: 10px; 
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 50px;
            display: block; 
}

    button:hover {
            background-color: rgb(38, 139, 38);
    }

    p {
            text-align: center;
            font-style: bold;
    }
</style>