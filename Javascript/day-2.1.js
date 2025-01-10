 // Get the button element by its ID
 const button = document.getElementById('myButton');

 // Add click event listener to the button
 button.addEventListener('click', function() {
   // Show the button's value when clicked
   alert('Button value: ' + button.value);
 });