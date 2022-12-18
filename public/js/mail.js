// use your firebase key here
const firebaseConfig = {
    apiKey: "AIzaSyDxQvgbT9zLtqddjcVylQ79cfjri7Jro9H",
    authDomain: "contactform-on.firebaseapp.com",
    databaseURL: "https://contactform-on-default-rtdb.firebaseio.com",
    projectId: "contactform-on",
    storageBucket: "contactform-on.appspot.com",
    messagingSenderId: "521426782125",
    appId: "1:521564872653:web:f25c911d851mfkour74jf"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
    