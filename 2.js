(function() {
			"use strict";

			function CalculateString(inputStr) {
				this._str = inputStr;
				console.log("Введена строка: " + this._str);
			}
			CalculateString.prototype.calc = function() {
				var result = 0,
					numb = this._str.match(/[0-9]+(\.[0-9]+){0,1}/g),
					op = this._str.match(/\+|\-|\*|\//g);

				if(numb[0]*1+"" !== "NaN") {
					result += numb[0]*1;
				}

				for(var i = 0; i < numb.length; i++) {
					switch(op[i]) {
						case "+": result += numb[i+1] * 1; break;
						case "-": result -= numb[i+1] * 1; break;
						case "*": result *= numb[i+1] * 1; break;
						case "/": result /= numb[i+1] * 1; break;
						case "=": break;
						default: continue; break;
					}
				}

				return result.toFixed(2);
			}

			var test = new CalculateString("3.5 +4*10-5.3 /5 = ");
			alert(test.calc());
			})();
