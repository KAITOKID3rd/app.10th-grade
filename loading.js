window.onload = function() {

  setTimeout( sample_func, 2000 );

  
}

function sample_func() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}


