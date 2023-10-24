const consoleLog = document.querySelector('#consoleLog');
consoleLog.onclick = function() {
  console.log('Пример использования команды console.log');
}

const alert1 = document.querySelector('#alert1');
alert1.onclick = function() {
  alert('Пример использования команды alert');
}

const prompt1 = document.querySelector('#prompt1');
prompt1.onclick = function() {
    prompt('Пример использования команды prompt');
}