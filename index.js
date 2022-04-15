
const mc = require('mineflayer');
/*

*/

var bot = mc.createBot({
    host: 'breadsb.minehut.gg',
    port: 25565,
    username: process.env.email,
    version: "1.17.1",
    auth: 'microsoft'
})


function lookAtPlayers () {
    const playerFilter = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if (!playerEntity) return
    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)
}
//
//  Localhost
//

const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname + '/public')));
const PORT = 12999 || process.env.PORT;

app.get('/sendLootbox/:user', (req, res) => {
	const { user } = req.params;
  bot.chat('I recieved a request from user ' + user)
})

server.listen(PORT, () => console.log(`API running on port ${PORT}`));