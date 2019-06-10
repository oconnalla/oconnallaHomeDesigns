// JS FOR CHANGING BANNER TITLES
<script src="jquery-3.4.0.min.js"></script>;
$(document).ready(function () {
    console.log('ready!');
});
//get the current filename
var url = window.location.pathname; //this returns the entire URL to the current file

var filename = url.substring(url.lastIndexOf('/') + 1); //this returns just the filename at the end of the full URL

//declare the title variable for use in the switch statement
var bigBanner;
var subBanner;
//create switch statement to determine a banner for the page
switch (filename) {
    case 'home.html':
        bigBanner = 'Spring Is Here!';
        subBanner = 'Shop Our Collection';
        break;
    case 'about.html':
        bigBanner = 'Home Page';
        subBanner = 'SubHome Page';
        break;
    case 'contact.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
    case 'cart.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
    case 'login.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
    case 'product.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
    case 'checkout.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
    case 'order.html':
        bigBanner = 'Home Page';
        subBanner = 'Home Page';
        break;
}
// Create a variable called el to hold the element whose id attribute has a value of footer
// var elBig = document.getElementById('MainbannerTitle');
// var elSmall =document.getElementById('subBannerTitle');
$('#bannerTitle').text = bigBanner;
$('#subBannerTitle').text = subBanner;