var
  pcap = require("pcap"),
  pcap_session = pcap.createSession("", "tcp"),
  crypto = require('crypto');

var hexVal = 0;

console.log("Listening on " + pcap_session.device_name);

pcap_session.on('packet', function (raw_packet) {
    var packet = pcap.decode.packet(raw_packet),
        data = packet.link.ip.tcp.data;

    if (data) {
        hexVal = data.toString('hex');
    }
});

function randomValueHex(hexValue) {
	return crypto.randomBytes()
}