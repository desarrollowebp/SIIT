# Componentes de angular

## Identifica el componente
Los componentes fueron generados previamente, lo encontraras bajo la ruta de
`/src/app/nombre-de-componente`. Este sera un directorio que contendra
los archivos:

- `nombre-de-componente.component.html`
- `nombre-de-componente.component.css`
- `nombre-de-componente.component.ts`

Puedes ignorar el archivo `nombre-de-componente.component.spec.ts`.

## Visualiza tu componente
Solo visita http://localhost:4200 y visita el enlace respectivo de tu modulo.

## Copia y pega tu codigo
Este sera el paso mas crucial, ya que pudiera ser que no se visualize correctamente por la
diferencia de versiones con Bootstrap, o que le falte alguna funcionalidad por la diferencia
de versiones de jQuery. En todo caso, los componentes tendran que quedar semi-funcionales.

### CSS
Esto sera lo mas sencillo. En el mismo orden que importas tus hojas de estilo en el `index.html`
pega cada una de ellas al archivo `nombre-de-componente.component.css`.

### HTML
Antes de pegar tu codigo, revisa que este bien formateado (solo la parte dentro de `<body>`), ya
que la consola de angular marcara errores. Lo mas frecuente son comillas extras o que una etiqueta
no este cerrada.

Como ya se tiene un archivo base de HTML, solo es necesario copiar el contenido dentro del `<body>`
en tu `index.html` como los `<div>`, `<p>`, `<a>` y entre otros.

### JS
Si tu proyecto utiliza jQuery, pega la linea `import * as $ from 'jquery';`
de tal manera que quede como:

```ts
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({

...
```

Si no lo utiliza, no es necesario pegar esa linea.

Copia el contenido de tu archivo `.js` dentro del metodo
`ngOnInit` para que quede de la siguiente forma:
```ts
...

export class MiComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Mi codigo
    $('h1').click(function() {
      $(this).fadeOut()
    })
  }
}
```
