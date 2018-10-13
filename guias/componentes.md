# Componentes de angular


## Crea un componente vacio
Crea y añade al componente raiz un nuevo componente vacio con el siguiente comando:
```
ng generate component nombre-de-componente
```

## Identifica el componente
Si generaste el componente exitosamente, lo encontraras bajo la ruta de
`/src/app/nombre-de-componente`. Este sera un directorio que contendra
los archivos:

- `nombre-de-componente.component.html`
- `nombre-de-componente.component.css`
- `nombre-de-componente.component.ts`

Puedes ignorar el archivo `nombre-de-componente.component.spec.ts`.

## Monta tu componente en la raiz
A la hora que generas tu componente, una linea de importacion del modulo es autoañadida al
archivo `/src/app/app.module.ts` esta se parecera a la siguiente:

```ts
import { NombreDeComponenteComponent } from './nombre-de-componente/nombre-de-componente.component';
```

Para que puedas visualizar tu componente modifica el arreglo de rutas en
el mismo archivo (`app.module.ts`) sustituyendo el `TestComponent` por
el `NombreDeComponenteComponent` que se te genero. Quedaria algo asi:

```ts
const routes:Routes = [
  { path: '', component: NombreDeComponenteComponent },
]
```

Esta modificacion hara que tu componente se monte en la raiz de la pagina (mas o menos :v)
y lo podras visualizar visitando http://localhost:4200/.

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

export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Mi codigo
    $('h1').click(function() {
      $(this).fadeOut()
    })
  }
}

```

> NOTA: Consuta el archivo `test.component.ts` en el componente `test` para ver un ejemplo
