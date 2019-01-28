const StringUtils = {
	processInput: function (input) {
		if (this.isBlank(input)) {
			input = ""
		}
		return input
	},
	isEmpty: function (input) {
		return input === null || input === '';
	},
	isNotEmpty: function (input) {
		return !this.isEmpty(input);
	},
	isBlank: function (input) {
		return input == null || /^\s*$/.test(input);
	},
	isNotBlank: function (input) {
		return !this.isBlank(input);
	},
	trim: function (input) {
		return input.replace(/^\s+|\s+$/, '');
	},
	trimToEmpty: function (input) {
		return input == null ? "" : this.trim(input);
	},
	startsWith: function (input, prefix) {
		return input.indexOf(prefix) === 0;
	},
	endsWith: function (input, suffix) {
		return input.lastIndexOf(suffix) === 0;
	},
	contains: function (input, searchSeq) {
		return input.indexOf(searchSeq) >= 0;
	},
	equals: function (input1, input2) {
		return input1 === input2;
	},
	equalsIgnoreCase: function (input1, input2) {
		return input1.toLocaleLowerCase() === input2.toLocaleLowerCase();
	},
	containsWhitespace: function (input) {
		return this.contains(input, ' ');
	},
	//生成指定个数的字符
	repeat: function (ch, repeatTimes) {
		var result = "";
		for (var i = 0; i < repeatTimes; i++) {
			result += ch;
		}
		return result;
	},
	deleteWhitespace: function (input) {
		return input.replace(/\s+/g, '');
	},
	rightPad: function (input, size, padStr) {
		return input + this.repeat(padStr, size);
	},
	leftPad: function (input, size, padStr) {
		return this.repeat(padStr, size) + input;
	},
	//首小写字母转大写
	capitalize: function (input) {
		let strLen = 0;
		if (input == null || (strLen = input.length) == 0) {
			return input;
		}
		return input.replace(/^[a-z]/, function (matchStr) {
			return matchStr.toLocaleUpperCase();
		});
	},
	//首大写字母转小写
	uncapitalize: function (input) {
		var strLen = 0;
		if (input == null || (strLen = input.length) == 0) {
			return input;
		}
		return input.replace(/^[A-Z]/, function (matchStr) {
			return matchStr.toLocaleLowerCase();
		});
	},
	//大写转小写,小写转大写
	swapCase: function (input) {
		return input.replace(/[a-z]/ig, function (matchStr) {
			if (matchStr >= 'A' && matchStr <= 'Z') {
				return matchStr.toLocaleLowerCase();
			} else if (matchStr >= 'a' && matchStr <= 'z') {
				return matchStr.toLocaleUpperCase();
			}
		});
	},
	//统计含有的子字符串的个数
	countMatches: function (input, sub) {
		if (this.isEmpty(input) || this.isEmpty(sub)) {
			return 0;
		}
		var count = 0;
		var index = 0;
		while ((index = input.indexOf(sub, index)) != -1) {
			index += sub.length;
			count++;
		}
		return count;
	},
	//只包含字母
	isAlpha: function (input) {
		return /^[a-z]+$/i.test(input);
	},
	//只包含字母、空格
	isAlphaSpace: function (input) {
		return /^[a-z\s]*$/i.test(input);
	},
	//只包含字母、数字
	isAlphanumeric: function (input) {
		return /^[a-z0-9]+$/i.test(input);
	},
	//只包含字母、数字和空格
	isAlphanumericSpace: function (input) {
		return /^[a-z0-9\s]*$/i.test(input);
	},
	//数字
	isNumeric: function (input) {
		return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
	},
	//小数
	isDecimal: function (input) {
		return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//负小数
	isNegativeDecimal: function (input) {
		return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//正小数
	isPositiveDecimal: function (input) {
		return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//整数
	isInteger: function (input) {
		return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
	},
	//正整数
	isPositiveInteger: function (input) {
		return /^\+?(?:0|[1-9]\d*)$/.test(input);
	},
	//负整数
	isNegativeInteger: function (input) {
		return /^\-?(?:0|[1-9]\d*)$/.test(input);
	},
	//只包含数字和空格
	isNumericSpace: function (input) {
		return /^[\d\s]*$/.test(input);
	},
	isWhitespace: function (input) {
		return /^\s*$/.test(input);
	},
	isAllLowerCase: function (input) {
		return /^[a-z]+$/.test(input);
	},
	isAllUpperCase: function (input) {
		return /^[A-Z]+$/.test(input);
	},
	defaultString: function (input, defaultStr) {
		return input == null ? defaultStr : input;
	},
	defaultIfBlank: function (input, defaultStr) {
		return this.isBlank(input) ? defaultStr : input;
	},
	defaultIfEmpty: function (input, defaultStr) {
		return this.isEmpty(input) ? defaultStr : input;
	},
	//删掉特殊字符(英文状态下)
	removeSpecialCharacter: function (input) {
		return input.replace(/[!-/:-@\[-`{-~]/g, "");
	},
	//只包含特殊字符、数字和字母(不包括空格,若想包括空格,改为[ -~])
	isSpecialCharacterAlphanumeric: function (input) {
		return /^[!-~]+$/.test(input);
	},
};
export default StringUtils
