# G-travel

Приложение G-travel.

## Системные требования

На сервере должен быть установлен [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/).

## Сервисы

### mongo

Сервис для хранения данных приложения.

<code>21017</code> — порт сервиса внутри приложения.

Для подключения к сервису внутри приложения пользователя/пароля не требуется. Данные хранятся в папке <code>./mongo-service/data</code>.

### postgres

Сервис для хранения данных приложения.

<code>5432</code> — порт сервиса внутри приложения.

Данные хранятся в папке <code>./postgres-service/data</code>. Для работы сервиса необходимо задать имя пользователя, пароль и имя базы данных в файле <code>./.env</code>

### redis

Сервис для хранения данных приложения в виде пары ключ:значение.

<code>6379</code> — порт сервиса внутри приложения.

<code>redis-service/redis.conf</code> — файл конфигурации Redis

Для подключения к сервису внутри приложения пользователя/пароля не требуется. Данные хранятся в папке <code>./redis-service/data</code>.

## web

Веб-сервис приложения.

<code>3000</code> — порт сервиса внутри приложения.

Внешний порт сервиса устанавливается с помощью переменной окружения <code>WEB_SERVICE_PORT</code> в файле <code>.env</code> в корне проекта.

Работает на <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a> framework.


## Разработка

Для запуска приложения в режиме разработки необходимо выролнить команду

```bash
npm run dev
# или
npm run start:dev
```

Для остановки контейнеров полсе окончания разработки:
```bash
npm run stop:dev
# или с удалением образов и данных
npm run stop:dev-rmi
```

## Использование

Для запуска приложения необходимо выролнить команду

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
# или при установленном npm
npm run start
```

Остановка приложения выполняется командой

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
# или с удалением образов и данных
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down --rmi all -v
```

## Support

[Bugs](https://github.com/zdproduction/g-travel/issues)

## Stay in touch

- Author: [Den Kochetkov](https://github.com/dkochetkov)
- E-mail: <d@zdp.su>
- Website: [zdp.su](https://zdp.su/)

## Лицензия

[Apache-2.0](LICENSE)

Copyright &copy; 2021 <a href="https://zdp.su" target="_blank">ZDP</a>
