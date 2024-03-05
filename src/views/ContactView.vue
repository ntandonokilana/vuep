<template lang="">
     <div class="Contact-form">
        <h1>Contact Me!</h1>
        <form action="https://formspree.io/f/xeqyoegr" method="POST">
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

<style>
    .Contact-form {
            background-color: rgb(0, 95, 129);
            width: 40%;
            margin: 50px auto;
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
            margin: 10px ;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        
    }
    textarea {
            height: 100px;
            resize: vertical; 
            margin: 10px ;
    }

    button {
            background-color: rgb(34, 162, 205);
            color: #fff;
            padding: 10px; 
            border: none;
            border-radius: 10px;
            margin: 50px;
}

    button:hover {
            background-color: rgb(32, 102, 137);
    }

    /* p {
            text-align: center;
            font-style: bold;
    } */
</style>