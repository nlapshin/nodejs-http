/*function testAsync() {
  console.log('1')

  setTimeout(() => {
    console.log('2')
  }, 0)

  function count() {
    console.log('3')
  }

  const res = new Promise((res) => {
    console.log('4')

    res('5')
  })

  count();
  res.then(console.log.bind(console))
}

console.clear()
testAsync()
*/

//1 - 4 - 3 - Promise(5)  - 2


/*
function notify() {
  console.log('notify')
}

function timer() {
  setTimeout(() => {
    notify()

    timer()
  }, 2000)  
}

timer()
*/











/*

const timeout = setTimeout(function fun() {
  console.log("timeout");

  timeout.refresh()
}, 2000);
*/
// cron

const CronJob = require('cron').CronJob;
const job = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Los_Angeles'
);


/*
domain1.com // мой домен
domain2.com // мой домен

Запрос с одного домена на другой

HTTP prefetch запрос. OPTIONS.

Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
*/

// Модель OSI.
// TCP.
// HTTP и HTTPS. Secure. Синхронное и асинхронное шифрование. Диффи-Хэлмена.
// IPv4 и IPv6.

//127.0.0.1 - IPv4. 0 - 255 = 2^8 * 2^8 * 2^8 * 2^8 = 2^32. 4294967296
// IPv6  3.4 x 1038
// 2001:0db8:85a3:0000:0000:8a2e:0370:7334

// 77.66.55.44 - 8.8.8.8

// 1. DNS resolve. Получение IP адреса.
// 2. Поднятие TCP-соединение.
// 3. HTTP запрос в рамках TCP-соединение.

// 24 -> 255.255.255.0 -> 11111111.11111111.11111111.0000000 
// 32 -> 255.255.255.255
// 31 -> 255.255.255.254
// 192.168.0.0/24 - за счет маски делим на адресную часть и часть внутри подсети.
// 192.168.0.1, 192.168.0.2, 192.168.0.3, ... 192.168.0.254.
// 192.168.0.1 или 192.168.0.254 - 
// 192.168.0.1 & 255.255.255.255
// 77.88.99.11/32 - сеть из одного адреса

// Конечные запрос - это данные(полезная нагрузка) + мета информация о запросе.

// Большой файл - это набор кусков заданной длинный. То есть пакета есть размер.
// Утилиты:
// ping, 
// traceroute(tracert)

/*
wlp0s20f3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
  inet 192.168.2.6  netmask 255.255.255.0  broadcast 192.168.2.255
  inet6 fe80::b508:79a0:1cb5:d257  prefixlen 64  scopeid 0x20<link>
  ether 38:87:d5:df:c5:0f  txqueuelen 1000  (Ethernet)
  RX packets 10502077  bytes 10336057394 (10.3 GB)
  RX errors 0  dropped 0  overruns 0  frame 0
  TX packets 5884151  bytes 1702565004 (1.7 GB)
  TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
*/

// RX, TX. R - receive, T - transmit.

/*
nik@nik:~/projects/webinar/nodejs-http$ nslookup google.ru
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
Name:	google.ru
Address: 216.58.210.163
Name:	google.ru
Address: 2a00:1450:4026:805::2003
*/

// ping - проверка доступности IP-адреса. Может быть закрыт.
// tracerout - проверка пути до адреса IP-адреса.
// ifconfig - информация о сети компьютера.
// nslookup - DNS resolve.

// NAT - Network Address Translation.

// 127.0.0.1 или localhost - адрес компьютера.
// 0.0.0.0 - адрес компьютера

// 127.0.0.1:80 - один сервер.
// 127.0.0.1:8080 - второй сервер.

// Когда мы запустили сервер на адресе 127.0.0.1 на порту 80. То по факту
// Мы открыли сокет, который слушает порт 80. И через который происходит взаимодействи.
// Сокет программный интерфейс.

// 65535. Порт 80 - ассицирован с HTTP. Порт 443 - HTTPS. Порт 21 - FTP. Порт 22 - SSH.
// 0—1023. От 3000.

// HTTP протокол - запрос и ответ. Клиент серверный.

// Запрос и ответ
Заголовок(Title)
Шапка(Headers)
Полезная нагрузка(payload)

GET /route HTTP/1.1

Content-Type: 'application/json'

HTTP 1.1, HTTP 2.0, HTTP 3.0

// Internal server error
// X-GOOGLE-Auth


// HTTPS - ассинхронное шифрование. Используют публичные и приватные ключи. Алгоритм Диффи-Хелмена.
// CA - центр авторизация. 3 лицо.

// nodemon
