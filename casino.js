var ice = {
    compareRolls: function(rolls, players , room) {
        var winner = Users.users[players[1]].userid; 
        var loser = rolls[Users.users[players[0]]];
        if(rolls[Users.users[players[0]]] > rolls[Users.users[players[1]]]) winner = rolls[Users.users[players[0]]].userid; loser = rolls[Users.users[players[1]]].userid;
        if(!rolls[Users.users[players[1]] === rolls[Users.users[players[0]]]]) {
        room.addRaw(Users.users[players[0]].name + ' rolled a <font color=red>' + rolls[Users.users[players[0]]] +'</font>');
        room.addRaw(Users.users[players[1]].name + ' rolled a <font color=red>' + rolls[Users.users[players[1]]] + '</font>');
        room.addRaw('<font color=#24678d> ' + winner + ' wins the dice game.</font>');

        var cleanedUp = dice.bet;
        var giveMoney = Number(cleanedUp);
        var money = Core.stdin('money.csv', Users.users[winner]);
        var total = Number(money) + Number(giveMoney);
        Core.stdout('money.csv', Users.users[winner], total);
        
        var cleanedDown = dice.bet;
        var takeMoney = Number(cleanedDown);
        var bucks = Core.stdin('money.csv', Users.users[loser]);
        var amount = Number(bucks) - Number(takeMoney);
        Core.stdout('money.csv', Users.users[winner],amount);
        
        delete this[room.id];
        }
        else  { 
            return room.add('It was a draw, both frens keep their money');
            delete this[room.id];
        }
        },
        generateRolls: function(players, room) {
            for(var i=0; i<players.length; i++) {
                this[room.id].rolls[Users.users[players[i]]] = Math.floor(Math.random()*6);
                }
            }
    };
 var cmds = {
startdice: function(target, room, user) {
     if(!this.can('broadcast'))  return;
     
if(isNaN(target)) return this.sendReply('Please use a real number fren.');

if(dice[room.id]) return this.sendReply('There is already a dice game in this room fren.');

var target = parseInt(target)

if(user.money > target) return this.sendReply('You cannot bet more than you have fren.');

 var b = 'bucks';
 
 if(target === 1)  b = 'buck';
 
dice[room.id] = {
    bet: target,
    players: [],
    rolls: {},
    }
    
this.add('|raw|<div class="infobox"><h2><center><font color=#24678d>' + user.name + ' has started a dice game for </font><font color=red>' + dice[room.id].bet  + ' </font><font color=#24678d>'+ b + '.</font><br /> <button name="send" value="/joindice">Click to join.</button></center></h2></div> ');
 
 },
 
 joindice: function(target, room, user) {
     if(!dice[room.id]) return this.sendReply('There is no dice game in this room fren.');

     if(!dice[room.id].players.indexOf(user.userid) === -1) {
     this.sendReply('You\'re already in this game fren.');
     return false;
}
     room.addRaw('<b>'+ user.name + ' has joined the game of dice.</b>');
if(dice[room.id].players.length === 2) {
         room.addRaw('<b>The dice game has started!</b>');
         dice.generateRolls(dice[room.id].players, room);
         dice.compareRolls(dice[room.id].rolls, dice[room.id].players, room);
         return true;
         }

     dice[room.id].players.push(user.userid);
     },

enddice: function(target, room, user) {
    if(!this.can('broadcast')) return;
    if(!dice[room.id]) return this.sendReply('There is no dice game, why don\'t you start one with /startdice.');
    room.addRaw('<b>'+ user.name + ' has ended the dice game</b>');
    delete dice[room.id];
    }
 };
 Object.merge(CommandParser.commands, cmds);
