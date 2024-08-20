function showCuisine(cuisine) {
  // Hide all content sections
  document.querySelectorAll('.cuisine-content').forEach(function(el) {
    el.style.display = 'none';
  });

  // Show the selected cuisine content
  document.getElementById('content-' + cuisine).style.display = 'block';

  // Adjust button styles
  document.querySelectorAll('.btn-group .btn').forEach(function(btn) {
    btn.classList.remove('btn-dark');
    btn.classList.add('btn-warning');
  });
  document.getElementById('btn-' + cuisine).classList.remove('btn-warning');
  document.getElementById('btn-' + cuisine).classList.add('btn-dark');
}
