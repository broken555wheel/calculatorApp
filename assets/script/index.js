function appendToResult(value) {
    var result = document.getElementById('result');
    result.value += value;
  }

  function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
  }

  function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }

  function calculateResult() {
    var result = document.getElementById('result');
    try {
      var calculation = eval(result.value);
      result.value = calculation;
    } catch (error) {
      result.value = 'Error';
    }
  }