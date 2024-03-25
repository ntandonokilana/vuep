<!-- <template lang="">
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

    p {
            text-align: center;
            font-style: bold;
    }
</style> -->

<template>
        <div class="contact-page">
          <div class="background-image"></div>
          <div class="contact-form">
            <h2>Get In Touch! </h2>
            <form action="https://formspree.io/f/xeqyoegr" method="POST">
              <div class="form-group">
                <label for="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" placeholder="Your Full Name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Your Email Address" required>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Message Us" required></textarea>
              </div>
              <div class="send-message">
                <button type="submit">Send</button>
              </div>
              <div class="contact-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                  <p style="color: #fff;">ntandonokilana@gmail.com</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg><br>
                  <p style="color: #fff;">+27 65 613 5999</p>
                  <div class="contact-info">
                  </div>
                </div>
            </form>
          </div>
        </div>
      </template>
      
      <style>
      .contact-page {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .contact-form {
        max-width: 500px;
        background: rgba(0, 0, 0, 0.5);
        padding: 20px;
        border-radius: 10px;
      }
      
      .contact-form h2 {
        text-align: center;
        color: #fff;
      }
      
      .contact-form .form-group {
        margin-bottom: 1rem;
      }
      
      .contact-form label {
        color: #fff;
      }
      
      .contact-form input,
      .contact-form textarea {
        width: 100%;
        padding: 0.5rem;
        background-color: transparent;
        border: none;
        border-left: 3px solid transparent;
        border-bottom: 1px solid #fff;
        color: #fff;
        margin-top: 5px;
      }
      
      .contact-form textarea {
        resize: vertical;
      }
      
      .contact-form .send-message {
        margin-top: 20px;
        text-align: center;
      }
      
      .contact-form button {
        padding: 0.75rem 1rem;
        border: none;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
      }
      
      .contact-form button:hover {
        background-color: #0056b3;
      }
      
      .send-message {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .contact-icons {
        display: flex;
        align-items: center;
      }
      
      .contact-icons svg {
        margin-right: 10px; /* Adjust as needed */
      }
      
      .contact-info {
        color: #fff;
      }
      </style>