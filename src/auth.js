// Initializes Facebook SDK and checks login status
export const initializeFacebookSDK = async () => {
  await loadFacebookSDK();

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1039134690678399', // INPUT_REQUIRED {Replace with your actual Facebook App ID}
      cookie     : true,
      xfbml      : true,
      version    : 'v14.0'
    });
    
    FB.AppEvents.logPageView();
    checkLoginState();
  };
};

const checkLoginState = () => {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

const statusChangeCallback = (response) => {
  const statusContainer = document.getElementById('status');
  const loginButton = document.getElementById('loginButton');
  if (response.status === 'connected') {
    statusContainer.innerText = 'You are successfully logged in with Facebook.';
    loginButton.style.display = 'none';
  } else {
    statusContainer.innerText = 'Please log in using the button below.';
    loginButton.style.display = 'block';
  }
};

export const facebookLogin = () => {
  FB.login(response => {
    statusChangeCallback(response);
  }, {scope: 'public_profile,email'});
};

const loadFacebookSDK = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};