# NgCeibaElems

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Build

Run `npm run build` to build the project.

Create an index.html at `dist/unified-script` folder and add the following html:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document</title>
</head>
<body>
<script src="elements-es2015.js" type="module"></script>
<script src="elements-es5.js" nomodule defer></script>
<script type="module">
  import './elements-es2015.js';

  const webComp  = document.createElement('custom-web-component');
  const formComp  = document.createElement('custom-form-component');

  webComp.addEventListener('loaded', () => console.log('custom web component mounted!'));
  formComp.addEventListener('loaded', () => console.log('custom form component mounted!'));

  document.body.append(webComp);
  document.body.append(formComp);


  webComp.setState({
    message: 'hi!!',
    entryData: {
      url: 'https://jakearchibald.com/2017/es-modules-in-browsers/',
      method: 'GET',
      body: {},
      headers: {},
    }
  });
</script>
</body>
</html>
```

## Run

Run `npm start` to run the static app in `http://localhost:5000/`.

## Playground

Use this javascript code in devTools console
```javascript
// get components DOM objects

const webComp = document.querySelector('custom-web-component')
const formComp = document.querySelector('custom-form-component')

// Pass data to component using React "useState" concept (INPUT):
webComp.setState({message: 'hi there!'})

// listen event from component with custom event API (OUTPUT):
formComp.addEventListener('form-filled', (event) => console.log(event.detail))
```
