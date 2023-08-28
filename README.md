## Code By:

- **Kevin Villarroel**

## Final Drill M8

#Sprint 2, diseño API RESTful, en donde los usuarios ahora deben logearse para ver los bootcamp

### Explicación

#La base de datos de postgre en este caso de llama db_jwtbootcamp, solo hay que cambiar ese parametro en el .env con la que se usará, ya que estará vácia por defecto
#Ejecutar en primera instancia: npm run sync-db para preparar la base de datos
#Ejecutar luego npm run dev-unix / dev-win dependiendo del OS

### Primeros pasos, en postman u otro

## Empezamos con la creaión de usuarios

#Dirigirse a http://localhost:3000/api/signup (POST) y en el body-json envíar:

{
"firstName": "Mateo",
"lastName": "Díaz",
"email": "mateo.diaz@correo.com",
"password": "mateo123456"
}

{
"firstName": "Santiago",
"lastName": "Mejías",
"email": "santiago.mejias@correo.com",
"password": "santiago123456"
}

{
"firstName": "Lucas",
"lastName": "Rojas",
"email": "lucas.rojas@correo.com",
"password": "lucas123456"
}

{
"firstName": "Facundo",
"lastName": "Fernández",
"email": "facundo.fernandez@correo.com",
"password": "facundo123456"
}

## Luego los bootcamp

#Dirigirse a http://localhost:3000/api/bootcamp (POST) y en el body-json envíar:

{
"title":"Introduciendo El Bootcamp de React",
"cue":"10",
"description":"React es la librería más usada en JavaScript para el desarrollo de interfaces"
}

{
"title":"Bootcamp Desarrollo Web Full Stack",
"cue":"12",
"description":"Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS"
}

{
"title":"Bootcamp Big Data, Inteligencia Artificial & MachineLearning",
"cue":"18",
"description":"Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS"
}

## Luego los usuarios a bootcamps

#Dirigirse a http://localhost:3000/api/bootcamp/adduser (POST) y en el body-json enviar:

{
"BootcampId":1,
"userId":1
}
{
"BootcampId":1,
"userId":2
}
{
"BootcampId":2,
"userId":1
}
{
"BootcampId":3,
"userId":1
}
{
"BootcampId":3,
"userId":2
}
{
"BootcampId":3,
"userId":3
}

## Luego probamos el login

#Primero con el user en http://localhost:3000/api/signin (POST) y luego en el body-json enviar:

{
"email": "pedroperez2@test.com",
"password": "25qw52qs"
}

#debería dar error

#Luego con cualquier user, por ejemplo:

{
"email": "santiago.mejias@correo.com",
"password": "santiago123456"
}

## Finalmente, con la sesión iniciada (y el token incluido en AUTH), las consultas solicitadas:

#http://localhost:3000/api/user/3 (GET)

#http://localhost:3000/api/user/1 (PUT)
{
"firstName": "Pedro",
"lastName": "Sánchez",
"email":"mateo.diaz@correo.com",
"password":"mateo123456"
}

#http://localhost:3000/api/user/1 (DELETE)

#localhost:3000/api/bootcamp/1 (GET)

#localhost:3000/api/bootcamp (GET)

#localhost:3000/api/user/3 (GET)

## Repositorio

https://github.com/aganbake/M8-FINAL-DRILL.git
