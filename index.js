const firebaseConfig = {
    apiKey: "AIzaSyCbpLWxbHYR8zHN1e2sVzumVc63IRRPZb0",
    authDomain: "otp-verification-1819.firebaseapp.com",
    projectId: "otp-verification-1819",
    storageBucket: "otp-verification-1819.firebasestorage.app",
    messagingSenderId: "611532432669",
    appId: "1:611532432669:web:aca7be2f93abe593b3edf4",
    measurementId: "G-FRC5WQN1X4"
  };

// Firebase start
firebase.initializeApp(firebaseConfig);

// Recaptcha
window.recaptchaVerifier =
new firebase.auth.RecaptchaVerifier('recaptcha-container');

// Send OTP
function sendOTP() {

  const number =
  document.getElementById("number").value;

  const message = document.getElementById("message");

  if(number === ""){
    message.style.color = "red";
    message.innerHTML = "Please enter mobile number";
     setTimeout(()=>{
        message.innerHTML = "";
    },2000);
    return;
  }

  if(!number.startsWith("+91")){
    message.style.color = "red";
    message.innerHTML = "Number must start with +91";

    setTimeout(()=>{
        message.innerHTML = "";
    },2000);
    return;
  }

  if(number.length !== 13){
    message.style.color = "red";
    message.innerHTML = "Enter valid 10 digit number";
     setTimeout(()=>{
        message.innerHTML = "";
    },2000);
    return;
  }


  firebase.auth().signInWithPhoneNumber(
    number,
    window.recaptchaVerifier
  )

  .then(function(result){

    window.confirmationResult = result;

    // alert("OTP Sent");
    message.style.color = "green";
    message.innerHTML = "OTP Send Successfully";
    setTimeout(()=>{
      message.innerHTML = " ";
    },2000);

  })

  .catch(function(error){

    alert(error.message);

  });

}

// Verify OTP
function verifyOTP(){

  const code =
  document.getElementById("otp").value;

  const message = document.getElementById("message");

  confirmationResult.confirm(code)

  .then(function(result){

    // alert("Login Success");
    message.style.color = "green";
    message.innerHTML = "Login Success";
    setTimeout(()=>{
      message.innerHTML = " ";
    },2000);

    // Reset input
    document.getElementById("number").value = "";
    document.getElementById("otp").value = "";

    grecaptcha.reset();

  })

  .catch(function(error){

    alert("Wrong OTP");

  });

}