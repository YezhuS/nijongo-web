# Nijongo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Lint

Run `ng lint` to execute the lint rules defined. Also it will be executed before the commit. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Commit message rule

`feat:` (una nueva feature (funcionalidad) del usuario, no será cuando hacemos un build)  
`fix:` (solución a un bug surgido en el código, no será cuando hacemos build)  
`docs:` (cambios en la documentación)  
`style:` (formateo, añadir semicolons, etc; sin cambios en el código de producción)  
`refactor:` (refactorizar código de producción, ej. renombar una variable)  
`test:` (añadir test que faltan, refactorizar tests; sin cambios en el código de producción)  
`chore:` (actualizar tareas grunt, etc; sin cambios en el código de producción)  

[Conventional commits guide](https://www.conventionalcommits.org/)

## Tomorrow features

`Kanji activity page` 
Añadir los kanjis estudiados por el momento (tanto en ejercicio como en resumen)  
Introducir un modo de ejercicio donde te den 10 kanjis diferentes y debes adivinar cual te preguntan (Código: se añadiría primero el correcto, se añaden 9 más aleatorios y se barajan)  

`letter shared component`  
Añadir toda la información de la letra/palabra para mostrar con el botón i
Añadir el total?

`Componentes`  
Cambiar estilos de los inputs
Quizás crear un input propio
Arreglar que al pulsar tras desplegar cualquier modal (snackbar o dialog) tenga el fondo celeste al pulsar. 
Arreglar en los buttons desplegables que no se cierre el primero si el segundo se ha desplegado también.
Mejorar el estilo de los resumes
Estilo del snackbar

`Base de datos`  
Actualizar los katakanas e introducir los kanjis
Añadir el nuevo vocabulario

`Partículas`  
  
`Pasar a aplicación móvil`  
[Angular -> PWA](https://mugan86.medium.com/crear-una-pwa-sencilla-con-angular-8-884eacded0ce)  

## Capacitor  
[Guide](https://betterprogramming.pub/how-to-convert-your-angular-application-to-a-native-mobile-app-android-and-ios-c212b38976df)  

`Pasos`
npm run prod - Generar aplicación en la carpeta de producción  
npx cap sync - Sincronizar cada cambio  
npx cap open android - Abrir Android Studio  

## URL Pública  
Añadir URL publica