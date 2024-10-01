<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="500" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clonar el repositorio
```
  git clone https://github.com/garySZA/pokedex-nest.git
```
2. Ejecutar 
```
  yarn install
```
3. Tener Nest CLI instalado
```
  npm i -g @nestjs/cli
```
4. Levantar la base de datos con Docker
```
  docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en el ```.env```
7. Levantar la aplicación en modo dev
```
  yarn start:dev
```
8. Reconstruir la base de datos con la semilla
```
  http://localhost:3000/api/v1/seed
```

## Stack
* MongoDB
* Nest

# Build de Producción
1. Crear el archivo ```.env.prod```
2. Llenar las variables de producción
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```