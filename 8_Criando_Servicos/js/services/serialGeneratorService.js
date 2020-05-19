//listaTelefonica eh o nome do app e serialGenerator eh o nome do serviço
angular.module("listaTelefonica").provider("serialGenerator", function (config) {
	console.log(config);
	var _length = 10;
	
	this.getLength = function () {
		return _length
	};

	this.setLength = function (length) {
		_length = length;
	};

	this.$get = function () {
		return {
			generate: function () {
				var serial = "";
				while(serial.length < _length) {
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;
			}

		};
	};
});