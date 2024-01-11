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
    .Contact-form {
            background-color: #fff;
            width: 50%;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
     h1 {
        text-align: center;
    }

    form {
          display: flex;
          flex-direction: column;
    }

    label {
            font-weight: bold;
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
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
    }

    button:hover {
            background-color: #555;
    }

    p {
            text-align: center;
            font-style: italic;
    }
</style>