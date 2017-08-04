var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('cEmail', {
    from: 'andrew',
    text: 'Ho ho ho!!!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('userEmail', function(email) {
  console.log('user email', email);
});
