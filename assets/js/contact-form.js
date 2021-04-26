const scriptURL = 'https://script.google.com/macros/s/AKfycbwF30mAZyagw_jgPedNTrAMIVx0pxCpaloFqycQxe-bzNQC98Hp2yBVuaV9vV_InLrqRQ/exec';
const form = document.forms['contact_us_form'];

form.addEventListener('submit', e => {
  e.preventDefault()
  $("#btnFetch").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
  $('#btnFetch').prop('disabled', true);
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if(!alert('Your Query Submitted successfully. Our Support Team Contact you Shortly.')){window.location.reload();}
    })
    .catch(error => {
      if (!alert("Failed to submit your query! Please try again.")){window.location.reload();}
    })
});