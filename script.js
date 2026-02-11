// JavaScript for slider functionality, OTP verification, and booking system

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// OTP verification
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    // Simulate sending OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(`Sending OTP ${otp} to ${phoneNumber}`);
    return otp;
}

function verifyOTP(inputOTP, actualOTP) {
    if (inputOTP === actualOTP) {
        alert('OTP verified successfully!');
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

// Booking system
function bookEvent() {
    const eventDetails = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        event: document.getElementById('event').value,
    };
    console.log('Booking event:', eventDetails);
    alert('Event booked successfully!');
}

// Initialize
showSlide(currentSlide);

// Connect buttons to functions
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('sendOTPButton').addEventListener('click', () => {
    const otp = sendOTP();
    document.getElementById('verifyButton').addEventListener('click', () => {
        const inputOTP = document.getElementById('otpInput').value;
        verifyOTP(inputOTP, otp);
    });
});
document.getElementById('bookButton').addEventListener('click', bookEvent);