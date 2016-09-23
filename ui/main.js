// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
  
     
      request.open('GET', 'http://gervitktrehan.imad.hasura-app.io/counter', true);
      request.send(null);
}; 