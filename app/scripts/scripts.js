var preload;

function tempTimeout(){
  preload = setTimeout(showPage, 1000);
  console.log('hiding');
}

function showPage(){
  document.getElementById('loading-text').style.display = 'none';
  console.log('showing after 1s');
  document.getElementById('wrapper').style.display = 'block';
  document.body.style.background = 'white';
}
