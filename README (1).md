
# Marvel API Web Application

Esta es una aplicación web creada como práctica de Bootstrap y JavaScript, que consume la API de Marvel para mostrar información sobre personajes, cómics y eventos. El proyecto está diseñado para practicar el uso de **Fetch API** y el diseño responsivo utilizando **Bootstrap**.

## Características

- Diseño responsivo creado con **Bootstrap**.
- Interfaz sencilla y atractiva utilizando **HTML** y **CSS**.
- Consumo de la **API de Marvel** para mostrar información dinámica.
- Uso de **Fetch API** para realizar solicitudes HTTP a la API de Marvel.
- Búsqueda de personajes de Marvel.
  
## Tecnologías utilizadas

- **HTML5**: Estructura base de la página.
- **CSS3**: Estilos personalizados para mejorar la presentación visual.
- **Bootstrap**: Framework para un diseño responsivo y componentes predefinidos.
- **JavaScript (ES6)**: Lógica de interacción y consumo de la API.
- **Fetch API**: Utilizado para hacer solicitudes HTTP asíncronas a la API de Marvel.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener lo siguiente instalado:

- Un navegador web moderno (Google Chrome, Firefox, Edge, etc.).

## Instalación y uso

1. Clona el repositorio en tu máquina local:

   \`\`\`bash
   git clone <https://github.com/ManRio/MarvelApp.git>
   \`\`\`

2. Abre el archivo \`index.html\` en tu navegador preferido.

3. Para que la aplicación funcione correctamente, necesitarás una **clave pública y privada** de la API de Marvel. Puedes obtenerlas registrándote en el [sitio web de Marvel](https://developer.marvel.com/).

4. Una vez que tengas las claves, colócalas en el archivo JavaScript donde se realizan las peticiones \`fetch\`:

   \`\`\`javascript
   const PUBLIC_KEY = 'TU_CLAVE_PUBLICA';
   const PRIVATE_KEY = 'TU_CLAVE_PRIVADA';
   \`\`\`

5. La aplicación está lista para ser usada. Puedes buscar personajes, ver detalles sobre cómics y eventos relacionados con Marvel.

## Estructura del proyecto

\`\`\`bash
.
├── index.html          # Página principal de la aplicación
├── styles.css          # Estilos personalizados
├── app.js              # Lógica de JavaScript, incluye el uso de Fetch API para la Marvel API
└── README.md           # Este archivo
\`\`\`

## API de Marvel

La aplicación consume la [API de Marvel](https://developer.marvel.com/) para obtener información actualizada sobre personajes, cómics, series y eventos del universo Marvel. La API requiere autenticación con una clave pública y privada, que deberás generar y usar como se describe en la sección anterior.

## Funcionalidades principales

1. **Búsqueda de personajes:** Puedes ingresar el nombre de un personaje de Marvel para obtener información sobre él.
2. **EN CONSTRUCCIÓN:** Se añadirán en proximos commits funcionalidades de busqueda por comics o eventos, entre otros, además de un buscador en la propia web.

## Próximas mejoras

- Agregar paginación para manejar grandes volúmenes de resultados.
- Incluir un sistema de filtrado por series, películas y equipos.
- Mejorar el diseño visual de la interfaz.
  
## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio y enviar un **pull request** con tus cambios. También puedes abrir un issue para sugerir mejoras o reportar problemas.

## Licencia

Este proyecto está bajo la Licencia MIT.
