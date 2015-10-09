# Pokedex

Aplicação hospedada no heroku [app][app]

## Rodando

### Standalone

Na sua máquina `npm start`

### Docker

Primeiramente instale o [docker][docker] e [docker-compose][docker-compose] depois basta
rodar o comando

`docker-compose run app`

Após isto a app esterá disponível no endereço http://localhost:3000

## Unit tests

`npm t`

## E2E tests

Primeiramente instale o [docker][docker] e [docker-compose][docker-compose] depois basta
rodar o comando

`docker-compose up -d`

para subir a aplicação e então

`APP_URL='http://pokedex.com' npm run e2e`.

Todos os testes sao efetuados no firefox

[app]: http://dpaulino-pokedex.herokuapp.com
[docker]: https://docs.docker.com/
[docker-compose]: https://docs.docker.com/compose/install/
