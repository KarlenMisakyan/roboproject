
var test = 0;
//локальный сервер вебсокет
var socket = new WebSocket("ws://localhost:3000");
    //открытие потока
    socket.onopen = function() {
        alert("Соединение установлено");

        const customer = document.getElementById('customer');
        const freelancer = document.getElementById('freelancer');

        customer.addEventListener('click', function() {
            return socket.send(1000);
        });
        freelancer.addEventListener('click', function() {
            return socket.send(-1000);
        });
    };
    //закрытие потока
    socket.onclose = function(event) {
        if (event.wasClean) {
          alert('Соединение закрыто чисто');
        } else {
          alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
      };

    socket.onmessage = function(event) {
        alert("Получены данные " + event.data);
    };

    socket.onerror = function(error) {
        alert("Ошибка " + error.massage);
    };

    