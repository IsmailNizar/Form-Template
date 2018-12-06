// Connect to FireBase

var config = {
  apiKey: "AIzaSyDIuPQlYh4Q1CZPLMFbJla0yJNYLQ2RwCY",
  authDomain: "contact-form-bae71.firebaseapp.com",
  databaseURL: "https://contact-form-bae71.firebaseio.com",
  projectId: "contact-form-bae71",
  storageBucket: "",
  messagingSenderId: "234530578470"
};
firebase.initializeApp(config);



function upload(){

var database = firebase.database();
var ref = database.ref("Contact");

var name = document.querySelector("#nom").value;
var tel = document.querySelector("#tel").value;
var email = document.querySelector("#email").value ;
var message = document.querySelector("#message").value ;
var gender = document.querySelector("#gender").value ;

var contact ={
    name : name,
    Telephone : tel,
    Email : email,
    Message : message,
    Gender : gender,

};


ref.push(contact);

// initialisation
document.querySelector("#nom").value = "";
document.querySelector("#tel").value = "";
document.querySelector("#email").value = "";
document.querySelector("#message").value = "";

}



