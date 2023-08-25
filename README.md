# api_prueba_propia

Prueba Técnica: Desarrollador Backend - Autenticación, Registro, API Pública y JSONPlaceholder
Objetivo: Implementar un sistema de autenticación de usuarios, registro y una relación muchos a muchos utilizando Node.js, Express, MySQL, Sequelize, una API pública para validar direcciones de correo electrónico y la API JSONPlaceholder para trabajar con datos ficticios.
Requerimientos:
1.	Crear una aplicación Express que incluya las siguientes funcionalidades:
a. Registro de usuarios: Los usuarios deben poder registrarse proporcionando un nombre de usuario único, una dirección de correo electrónico válida y una contraseña segura. Antes de almacenar los datos en la base de datos, se debe validar la dirección de correo electrónico utilizando una API pública de validación.
b. Autenticación de usuarios: Los usuarios registrados deben poder iniciar sesión utilizando su dirección de correo electrónico y contraseña. Deben recibir un token de autenticación válido para acceder a las rutas protegidas.
2.	Utilizar una base de datos MySQL para almacenar la información de los usuarios registrados y la relación muchos a muchos. Utiliza Sequelize como ORM para interactuar con la base de datos.
3.	Implementar rutas y controladores para las siguientes acciones:
a. Registro de usuarios. b. Inicio de sesión de usuarios. c. Obtención de la información del perfil del usuario autenticado. d. (Opcional) Cierre de sesión de usuarios.
4.	Implementar una relación muchos a muchos entre usuarios y roles. Un usuario puede tener varios roles y un rol puede estar asociado a varios usuarios.
5.	Utilizar una API pública para validar las direcciones de correo electrónico proporcionadas durante el registro. Puedes utilizar servicios como "EmailValidator" u otros similares.
6.	Crear y migrar las tablas necesarias en la base de datos utilizando las migraciones de Sequelize.
7.	Implementar middleware de autenticación para proteger las rutas que requieren autenticación. Solo los usuarios autenticados deben poder acceder a estas rutas.
8.	Utilizar la API JSONPlaceholder para obtener datos ficticios de usuarios, publicaciones u otras entidades relacionadas. Integrar estos datos en la aplicación de manera apropiada.
9.	Manejar adecuadamente los errores, como intentos de inicio de sesión fallidos, usuarios duplicados durante el registro, etc.
10.	Escribir pruebas unitarias para al menos algunas de las funcionalidades clave implementadas.
Criterios de Evaluación:
•	Correcta implementación de las funcionalidades de registro y autenticación.
•	Uso adecuado de Sequelize, la API pública de validación de correos electrónicos y la API JSONPlaceholder.
•	Implementación exitosa de la relación muchos a muchos entre usuarios y roles.
•	Integración adecuada de los datos de JSONPlaceholder en la aplicación.
•	Uso de rutas, controladores y middleware de manera efectiva.
•	Manejo adecuado de errores y validación de datos.
•	Implementación de pruebas unitarias efectivas.
•	Código limpio, legible y bien estructurado.
•	Uso de buenas prácticas de seguridad, como el almacenamiento seguro de contraseñas.
Entrega:
Comparte tu código a través de un repositorio en una plataforma de control de versiones (como GitHub). Proporciona instrucciones claras sobre cómo configurar y ejecutar la aplicación localmente, incluyendo cualquier configuración necesaria para la base de datos, la API pública y la integración con JSONPlaceholder.
