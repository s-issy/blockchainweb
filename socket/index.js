const io = require('socket.io')(3000)

io.on('connection', function (socket) {

  socket.emit('socketId', {socketId: socket.id})

  socket.broadcast.emit('getNodes', {nodes: [socket.id]})

  socket.on('disconnect', function() {
    socket.broadcast.emit('disconnectNode', socket.id)
  })

  socket.on('nodes', function () {
    const nodes = Object.keys(io.sockets.sockets).filter(function(v, i) {
      return (v !== socket.id)
    })
    socket.emit('getNodes', {nodes: nodes})
  })

  socket.on('requestBlocks', function (data) {
    socket.to(data.socketId).emit('sendBlocks', {socketId: socket.id, latestBlockHash: data.latestBlockHash})
  })

  socket.on('sendBlocks', function (data) {
    socket.to(data.socketId).emit('receiveBlocks', data.blocks)
  })

  socket.on('broadcast', function (newBlocks) {
    socket.broadcast.emit('receiveBlocks', [newBlocks])
  })
})
