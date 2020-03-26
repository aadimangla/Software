var config = {
  apiKey: "AIzaSyBEM05-W-Is2K6bLqQ1V0WZ9sVcSogoOVg",
  authDomain: "hindtowardschange-12853.firebaseapp.com",
  databaseURL: "https://hindtowardschange-12853.firebaseio.com",
  projectId: "hindtowardschange-12853",
  storageBucket: "",
  messagingSenderId: "962462628153"

};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');

  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
 
  // Save message
  saveMessage(name,  email, phone, message);

  // Show alert
  document.querySelector('.alert1').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
	  
    document.querySelector('.alert1').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    Email:email,
    Phone:phone,
    Message:message
  });
}
