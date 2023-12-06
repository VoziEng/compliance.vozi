document.getElementById('submitBtn').addEventListener('click', function() {
    window.location.href = 'mainpage.html'; // Redirect to mainpage
});

function requestOTP() {
    // Mock function to simulate OTP request
    // In a real scenario, you should send a request to your server
    alert("OTP sent to your phone number");
    document.getElementById('otpSection').style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    var phone = document.getElementById('phone').value;
    var otp = document.getElementById('otp').value;

    // Validate OTP here
    // Send phone and OTP to your server for verification

    alert("Login successful with phone: " + phone + " and OTP: " + otp);
});

