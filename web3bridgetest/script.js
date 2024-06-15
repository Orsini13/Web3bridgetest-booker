const individualDeskSelect = document.getElementById('individual-desk');
const bookDeskButton = document.getElementById('book-desk');
const bookingMessage = document.getElementById('booking-message');

const individualDeskPrices = {
  basic: 10,
  premium: 15,
  executive: 20
};

const teamDeskPrice = 25;

bookDeskButton.addEventListener('click', function() {
  const deskType = individualDeskSelect.value;
  const date = document.getElementById('date').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;

  if (!date || !startTime || !endTime) {
    bookingMessage.textContent = "Please fill in all fields.";
    return;
   }
  
  let hourPrice;
  let availDesks = 10; 

  if (deskType === 'team') {
    hourPrice = teamDeskPrice;
    availDesks = 5; 
     } else {
    hourPrice = individualDeskPrices[deskType];
     }
});