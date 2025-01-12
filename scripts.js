




// Get all FAQ items

const faqs = document.querySelectorAll('.faq');
        
faqs.forEach(faq => 
{
faq.addEventListener("click", () => 
{

        // Close all other FAQs
        faqs.forEach(item => 
        {
        if (item !== faq) 
                {
                  item.classList.remove('active');
                }
        });

// Toggle the active class
faq.classList.toggle('active');


});
});

/*

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";


// Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyClliYU545gi8bPoeWF-JbMGIKwual5NoE",
        authDomain: "ufrenza-task.firebaseapp.com",
        databaseURL: "https://ufrenza-task-default-rtdb.firebaseio.com/",
        projectId: "ufrenza-task",
        storageBucket: "ufrenza-task.firebasestorage.app",
        messagingSenderId: "773560256844",
        appId: "1:773560256844:web:1b4cbeb1f216125af127e9"
      };
      
     // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database
    const database = firebase.database();
    const formRef = database.ref("submissions");

      // JavaScript code to handle form submission
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const money = document.getElementById('money').value;
  const message = document.getElementById('message').value;

  const db = firebase.database();
  const formRef = db.ref('submissions');

  formRef.push({
      name: name,
      phone: phone,
      email: email,
      money: money,
      message: message
  })

  .then(() => {
    console.log('Data submitted successfully');
    alert('Form submitted successfully!');
    // Optionally reset the form
    document.getElementById('myForm').reset();
})
.catch((error) => {
    console.error('Error submitting form:', error);
    alert('Failed to submit form');
});
});




/* Rules to be filled in firebase
service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if true;
          }
        }
      }
      */

      let currentIndex = 0;

      function showSlide(index) {
          const slides = document.querySelector('.slides');
          const slideWidth = document.querySelector('.slide').offsetWidth;
          const totalSlides = document.querySelectorAll('.slide').length;
          const visibleSlides = 4; // Adjust based on the number of images visible at a time
      
          // Ensure the index stays within bounds
          if (index >= totalSlides- visibleSlides ) {
              currentIndex = 0; // Loop back to the start
          } else if (index < 0) {
              currentIndex = totalSlides - visibleSlides - 1; // Loop to the end
          } else {
              currentIndex = index;
          }
      
          // Move the slides
          const maxOffset = (totalSlides - visibleSlides) * slideWidth;
    const offset = currentIndex * slideWidth;
          slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
      
      function moveSlide(step) {
          showSlide(currentIndex + step);
      }
      
      // Initialize the slider
      showSlide(currentIndex);

      
      


      // Attach event listeners to the images
    document.getElementById('prevImage').addEventListener('click', () => moveSlide(-1));
    document.getElementById('nextImage').addEventListener('click', () => moveSlide(1));


      
      

      
    
