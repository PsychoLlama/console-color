/*global console*/
var log;

(function () {
	'use strict';
	function initial() {
		return {
			padding: '0 10px',
			'font-size': '15px',
			'border-radius': '2px',
			'font-family': 'monospace'
		};
	}

	function parse(input, obj) {
		var args = Array.prototype.slice.call(input);
		if (args.length) {
			obj.log = args;
		}
		return obj.log;
	}

	function style(obj) {
		return Object.entries(obj.css).map(function (style) {
			return style.join(':');
		}).join(';');
	}

	Object.keys = Object.keys || function (obj) {
		var key, keys = [];
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				keys.push(key);
			}
		}
		return keys;
	};
	Object.entries = Object.entries || function (obj) {
		return Object.keys(obj).map(function (key) {
			return [key, obj[key]];
		});
	};

	log = {
		log: [],
		css: initial(),
		color: function (color) {
			this.css.color = color;
			return this;
		},
		bkg: function (background) {
			this.css.background = background;
			return this;
		},
		size: function (size) {
			this.css['font-size'] = (typeof size === 'string') ? size : size + 'px';
			return this;
		},
		style: function (styles) {
			Object.keys(styles).forEach(function (style) {
				log.css[style] = styles[style];
			});
			return this;
		},
		error: function () {
			parse(arguments, this);
			return this.color('#fff').bkg('#d82424').big.print();
		},
		warning: function () {
			parse(arguments, this);
			return this.color('#fff').bkg('#c1a932').big.print();
		},
		success: function () {
			parse(arguments, this);
			return this.color('#fff').bkg('#27a352').big.print();
		},
		info: function () {
			parse(arguments, this);
			return this.color('#fff').bkg('#2b9eb3').big.print();
		},
		print: function () {
			var log = parse(arguments, this);
			if (!log.length) {
				return this;
			}
			console.log.call(console, '%c' + log.join(' '), style(this));
			this.css = initial();
			return this;
		}

	};

	Object.defineProperty(log, 'big', {
		get: function () {
			log.css['font-weight'] = 'bold';
			return log;
		}
	});
}());
