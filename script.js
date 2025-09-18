document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const pickup = document.getElementById("pickup").value;
      const drop = document.getElementById("drop").value;
      const date = document.getElementById("date").value;

      if (name && phone && pickup && drop && date) {
        alert("Booking submitted successfully!");
        form.reset();
      } else {
        alert("Please fill all fields.");
      }
    });
  }
});

