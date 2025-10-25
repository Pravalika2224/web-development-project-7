// Smooth scroll and animation for call-to-action
document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

// Simple button animation effect
const buyBtn = document.querySelector('.buy-btn');
buyBtn.addEventListener('click', () => {
  alert("🎟️ Thank you for your interest! Ticket sales open soon!");
});
