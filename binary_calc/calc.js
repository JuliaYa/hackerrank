(function(){
	var firstNum = undefined;
	var secondNum = undefined;
	var operator = undefined;
	var result = "";

	var resultDiv = undefined;
	var btn0, btn1 = undefined;
	var	btnClr, btnEql = undefined;
	var btnSum, btnSub, btnMul, btnDiv = undefined;


	var setOperandsInput = function () {
		var splitedInput = resultDiv.innerHTML.split(operator);
		firstNum = splitedInput[0].split('');
		secondNum = splitedInput[1].split('');
	};

	var sum = function () {		
		setOperandsInput();
		firstNum.reverse();
		secondNum.reverse();
		var longestNum, shortestNum = "";
		if(firstNum.lenght >= secondNum.lenght) {
			longestNum = firstNum;
			shortestNum = secondNum;
		}else{
		 	longestNum = secondNum;
		 	shortestNum = firstNum;
		}
		for (var idx in longestNum){
			var num1 = longestNum[idx];
			var num2 = shortestNum[idx];
			if(num2){
				if(num1 == "0" && num2 == "0") result += "0";
				if(num1 == "1" || num2 == "1") result += "1";
			}else{
				result += num1;
			}
		}
		showResult();
	};

	var sub = function () {
		setOperandsInput();
	};

	var mul = function () {
		setOperandsInput();
	};

	var div = function () {
		setOperandsInput();
	};

	var showResult = function () {
		resultDiv.innerHTML = resultDiv.innerHTML + "=" + result;
	};

	var printSimbol = function (simbol) {
		resultDiv.innerHTML = resultDiv.innerHTML + simbol;
	};

	var clear = function () {
		firstNum = undefined;
		secondNum = undefined;
		operator = undefined;
		resultDiv.innerHTML = "";
		result = "";
	};

	var initElements = function () {
		resultDiv = document.getElementById('res');
		btn0 = document.getElementById('btn0');
		btn1 = document.getElementById('btn1');
		btnClr = document.getElementById('btnClr');
		btnEql = document.getElementById('btnEql');
		btnSum = document.getElementById('btnSum');
		btnSub = document.getElementById('btnSub');
		btnMul = document.getElementById('btnMul');
		btnDiv = document.getElementById('btnDiv');

		btn0.onclick = function () {
			printSimbol("0");
		};
		btn1.onclick = function () {
			printSimbol("1");
		};
		btnSum.onclick = function () {
			printSimbol("+");
			operator = "+";
		};
		btnSub.onclick = function () {
			printSimbol("-");
			operator = "-";
		};
		btnMul.onclick = function () {
			printSimbol("*");
			operator = "*";
		};
		btnDiv.onclick = function () {
			printSimbol("/");
			operator = "/";
		};

		btnClr.onclick = function () {
			clear();
		};

		btnEql.onclick = function() {
			switch(operator){
				case '+':
						sum();
						break;
				case '-':
						sub();
						break;
				case '*':
						mul();
						break;
				case '/':
						div();
						break;
				default: console.log('Something wrong!');

			}
		};
	};

	initElements();

})();