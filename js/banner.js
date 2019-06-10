// JS FOR CHANGING BANNER TITLES


//get the current filename
var url = window.location.pathname; //this returns the entire URL to the current file
var filename = url.substring(url.lastIndexOf('/')+1); //this returns just the filename at the end of the full URL
//declare the title variable for use in the switch statement
var bigBanner;
var subBanner;
// $( document ).ready(function() {
//create switch statement to determine a banner for the page
switch (filename) {
case 'home.html':
  bigBanner = 'Spring Is Here!';
  subBanner = '<a href="product.html"> Shop Our Collection > </a>';
  break;
case 'about.html':
  bigBanner = 'Want To Learn More?';
  subBanner = '<a href="#">Visit Our Instagram ></a>';
  break;
case 'contact.html':
  bigBanner = 'Trying To Reach Us?';
  subBanner = 'Fill Out Our Form Below!';
  break;
case 'cart.html':
  bigBanner = 'Your Cart';
  subBanner = 'Checkout Page 1/3';
  break;
case 'login.html':
  bigBanner = 'Stay Updated!';
  subBanner = 'Join Our Email List';
  break;
case 'product.html':
  bigBanner = 'We\'re always Designing ';
  subBanner = 'Join Our Email List To Stay Updated!';
  break;
case 'checkout.html':
  bigBanner = 'Payment Process';
  subBanner = 'Checkout Page 2/3';
  break;
case 'order.html':
  bigBanner = 'Almost There!';
  subBanner = 'Checkout Page 3/3';
  break;
}
// Create a variable called el to hold the element whose id attribute has a value of footer
var elBig = document.getElementById('mainBannerTitle');
var elSmall =document.getElementById('subBannerTitle');

// Write the message into that element
elBig.textContent = bigBanner;
elSmall.innerHTML=subBanner;





//get the calculate button
// var calcButton = document.getElementById('calculate');
// calcButton.addEventListener('click', calcSum,false);

//bind the listener to the button
// var calcSum = function(){
  //get user input for first value
//   var value1 = 'Welcome' + parseInt(document.getElementById('value1').value);

  //calculate sum
//   var sum = value1;
//   var resultSum = document.getElementById('modalUserName');
//   resultSum.value = sum;
// };

// $( function() {
//   $( "input" ).checkboxradio();
// } ); 

// var $subFunc = $("#contactButton").click(function(){
//         var confirmed = document.getElementById('confirmation');
//         var confirmedText = '<h1>Thanks, we\'ll get back to you shortly\!</h1>';
//         confirmed.innerHTML = confirmedText;
// });
// $("#contactButton").click(function(e) {
//     e.preventDefault();
//     $subFunc();
// });

