/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {
	aeon: 'glisteringaeon',
	glisteringaeon: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Trainer: Glistering Aeon<br />' +
			'Ace: Really? Duh.<br />' +
			'Catchphrase: Grab your sombreros and glow sticks and lets rave!<br />' +
			'<img height="150" src="http://www.animeyume.com/ludicolo.jpg"></center>');
	},

	elitefourbalto : 'balto', 
	balto: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img height="90" src="http://fc08.deviantart.net/fs71/f/2012/035/e/f/snorlax_by_all0412-d4omc96.jpg">' +
			'<img src="http://i.imgur.com/gcbLD9A.png">' +
			'<img src="http://fc04.deviantart.net/fs71/f/2013/223/3/b/mega_kangaskhan_by_peegeray-d6hnnmk.png" height="100"><br />' +
			'<b>Ace: </b>Snorlax<br />' +
			'<b>Catchphrase: </b>To be a championship player,you need a championship team.</center>');
	},
	
	arsh: 'blakjack',
	arshmalik: 'blakjack',
	blakjack: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<center><img src="http://i.imgur.com/otDPUQU.png"><br><img src="http://i.imgur.com/Wdthjon.png"><img src="http://i.imgur.com/dck9vdP.png"><img src="http://i.imgur.com/5VqH7tF.png"><br><font color="brown"><blink>Ace: Swellow</blink><br><font color="brown">Haters Gonna Hate, Potatotes Gonna Potate But nCrypt\'s Gonna Masturbate');
	},

	kafka: 'kafkablack',
	kafkablack: function(target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src="http://i.imgur.com/bvCvPmd.gif"><br />' +
			'<font size="3"><b><i><font color="CCCC33">Kafka</i><br></font><b><br />' +
			'<blink> Ace: Shimmy </blink></b><br />' +
			'<b>Shimmy Shimmy</b></center>');
        },

	mac: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/1jVxQY2.png" width="140">' +
			'<img src="http://i.imgur.com/LLFGr9y.png">' +
			'<img src="http://i.imgur.com/7vTltT9.png" width="140"><br />' +
			'<b>Ace:</b> <font color="green">Kecleon</font><br />' +
			'<font color=#ff0000">Y</font><font color=#ff2100">o</font><font color=#ff4200">u</font><font color=#ff6300">\'</font><font color=#ff8500">l</font><font color=#ffa600">l</font> ' +
			'<font color=#ffe800">N</font><font color=#f3ff00">e</font><font color=#d2ff00">v</font><font color=#b1ff00">e</font><font color=#90ff00">r</font> ' +
			'<font color=#4dff00">F</font><font color=#2cff00">i</font><font color=#0bff00">n</font><font color=#00ff16">d</font> ' +
			'<font color=#00ff58">A</font><font color=#00ff79">n</font><font color=#00ff9b">y</font><font color=#00ffbc">o</font><font color=#00ffdd">n</font><font color=#00feff">e</font> ' +
			'<font color=#00bcff">M</font><font color=#009bff">o</font><font color=#0079ff">r</font><font color=#0058ff">e</font> ' +
			'<font color=#0016ff">F</font><font color=#0b00ff">a</font><font color=#2c00ff">b</font><font color=#4d00ff">u</font><font color=#6e00ff">l</font><font color=#9000ff">o</font><font color=#b100ff">u</font><font color=#d200ff">s</font> ' +
			'<font color=#ff00e8">T</font><font color=#ff00c7">h</font><font color=#ff00a6">a</font><font color=#ff0085">n</font> ' +
			'<font color=#ff0042">M</font><font color=#ff0021">e</font></center>');
	},

	macra: 'macrarazy',
        professormac: 'macrarazy',
	macrarazy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://media-cerulean.cursecdn.com/attachments/thumbnails/5/622/530/530/mega_lucario.png" height="180" width="150"><br />' +
                '<img src="http://th03.deviantart.net/fs70/PRE/i/2014/003/8/1/mega_aggron_by_theangryaron-d70p759.png" height="130" width="150"> <img src="http://i.imgur.com/91GZs2L.gif"> <img src="http://fc06.deviantart.net/fs70/f/2013/285/4/7/mega_aggron_tramplin__the_lawn_by_brandon_stuart-d6q5051.png" height="130" width="160"><br />' +
		'<b><blink>Ace: Mega Aggron</blink><br />' +
		'<font color=gray>Sometimes... Steel is too much for you!</font></b>');
	},

	fishy: 'piscean',
	piscean: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/spheal.gif">' +
			'<img src="http://i.imgur.com/iR3xhAH.gif">' +
			'<img src="http://th01.deviantart.net/fs70/200H/f/2011/010/a/b/derp_spheal_by_keijimatsu-d36um8a.png" width="110" height="100"><br />' +
			'<b>Ace:</b> Derp<br />' +
			'<b>Catchphrase:</b> What am I supposed to do with this shit?</center>');
	},

	priest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/pHVCLC5.png" width="140" height="100">' +
			'<img src="http://i.imgur.com/BkVihDY.png">' +
			'<img src="http://i.imgur.com/f39NE2W.gif"><br />' +
			'<font color="red"><blink>Ace: Heatran</blink></font><br />' +
			'Are you ready to face holyness itself? Will you open the door to my temple? Let your chakras make the decision for you.</center>');
	},

	high: 'princesshigh',
	princesshigh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://31.media.tumblr.com/tumblr_ltuo9yFLI81r5wm28o1_250.gif">' +
			'<img src="http://i.imgur.com/0xsg2uK.gif" width="370">' +
			'<img src="http://31.media.tumblr.com/tumblr_ltuo9yFLI81r5wm28o1_250.gif" ><br />' +
			'<b>Ace:</b> <font color=#d63265><blink>Gardevior</blink></font><br />' +
			'<b><font color=#ff0000">L</font><font color=#ff2300">i</font><font color=#ff4700">v</font><font color=#ff6a00">e</font>' +
			'<font color=#ff8e00"> </font><font color=#ffb100">f</font><font color=#ffb100">a</font><font color=#ffd500">s</font>' +
			'<font color=#ffd500">t</font><font color=#bdff00">,</font><font color=#9aff00"> </font><font color=#76ff00">D</font>' +
			'<font color=#53ff00">i</font><font color=#2fff00">e</font><font color=#0bff00"> </font><font color=#00ff17">y</font>' +
			'<font color=#00ff3b">o</font><font color=#00ff5e">u</font><font color=#00ff82">n</font><font color=#00ffa6">g</font>' +
			'<font color=#00ffc9">,</font><font color=#00ffed"> </font><font color=#00edff">b</font><font color=#00c9ff">a</font>' +
			'<font color=#00a6ff">d</font><font color=#0082ff"> </font><font color=#005eff">g</font><font color=#003bff">i</font>' +
			'<font color=#0017ff">r</font><font color=#0b00ff">l</font><font color=#2f00ff">s</font><font color=#5300ff"> </font>' +
			'<font color=#7600ff">d</font><font color=#9a00ff">o</font><font color=#bd00ff"> </font><font color=#e100ff">i</font>' +
			'<font color=#ff00f9">t</font><font color=#ff00d5"> </font><font color=#ff00b1">w</font><font color=#ff008e">e</font>' +
			'<font color=#ff006a">l</font><font color=#ff0047">l</font><font color=#ff0023">.</font></b></center>');
	},

	receptionist: 'recep',
	receptionist147: 'recep',
	recep: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/4xzLvzV.gif">' +
			'<img src="http://i.imgur.com/48CvnKv.gif" height="80" width="290">' +
			'<img src=http://i.imgur.com/4xzLvzV.gif><br />' +
			'<b>Ace:</b> Patrick<br />' +
			'<b>Catchphrase:</b> I may be stupid, but I\'m also dumb.<center>');
	},
	
	shofu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://static2.businessinsider.com/image/508807266bb3f70f5d000000/15-things-that-make-barack-obama-sad.jpg" height="476" width="357"><br />' +
			'<img src="http://pbs.twimg.com/profile_images/1538004667/Document0002.png"><br />' +
			'<b><blink>Ace: Darniggatan</blink></b><br />' +
			'<b>The realest nigga you have ever seen</b>');
	},

	sk: 'silverkill',
	silverkill: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img height=150 src="http://fc00.deviantart.net/fs70/f/2013/320/9/3/mega_scizor_by_silentgpanda-d6ujsmg.jpg">' +
			'<img src="http://frostserver.no-ip.org:8000/images/silverkill-tc.png">' +
			'<img height=150 src="https://1-media-cdn.foolz.us/ffuuka/board/vp/image/1367/35/1367354021540.jpg"><br />' +
			'<b>Ace: </b>Mo\' Fuckin\' Common Sense!<br />' +
			'<b>Quote: </b>Would you like some fresh cut nanis? No? Well your mom bought some. She LOVED it ;D</center>');
	},
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;
