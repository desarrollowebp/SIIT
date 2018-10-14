# Uso basico de `git`


## Instalacion

### Windows
- Descarga el ejecutable de `git` de este enlace: https://git-scm.com/download/win
- Utiliza todas las opciones por defecto en la instalacion
- Se tardara unos momentos y listo
- Ya puedes utilizar `git`

### Linux
```
# <gestionador-de-paquetes> install git
```


## Configuracion
- Copia, pega y modifica las siguientes lineas en la linea de comandos (o terminal)
- `git config --global user.name "Tu Nombre En Comillas"`
- `git config --global user.email tu.email.sin@comillas.com`

> NOTA: En parte del email utiliza el mismo que en el registro a GitHub.


## Clona un repositorio
- Abre la linea de comandos
- Se localizara en tu directorio (o carpeta) de usuario
- Posicionate al directorio de tu preferencia utilizando el comando `cd <mi-directorio>`
- Ingresa el siguiente comando: `git clone https://github.com/desarrollowebp/SIIT.git`
- Este creara un directorio con el nombre `SIIT` que contendra todo el proyecto

### Ejemplo de posicionamiento
```
C:\Usuarios\mi-usuario>cd Documentos
C:\Usuarios\mi-usuario\Documentos>cd Proyectos
C:\Usuarios\mi-usuario\Documentos\Proyectos> cd mi-directorio
C:\Usuarios\mi-usuario\Documentos\Proyectos\mi-directorio> git clone ...
```

### Ejemplo de salida de directorio
```
C:\Usuarios\mi-usuario>cd Documentos
C:\Usuarios\mi-usuario\Documentos>cd alvEsteNoEra
C:\Usuarios\mi-usuario\Documentos\alvEsteNoEra> cd ..
C:\Usuarios\mi-usuario\Documentos>

```

> NOTA: Tienes que estar posicionado en el directorio `SIIT` que creaste para la siguiente parte.


## Utilizacion del repositorio

### Prepararacion para cambios
Despues de clonarlo, deberas cambiarte a tu rama. Esta te permitira trabajar libremente en tu
modulo del SIIT sin que haya conflictos con otros cambios.

Primero crea la rama localmente con el siguiente comando:
```
git checkout -b nombre-del-modulo-del-siit
```

Despues baja los cambios de tu rama con el siguiente comando:
```
git pull origin nombre-del-modulo-del-siit
```

> NOTA: Para comprobar que si bajaste los cambios correctamente, el mensaje que salga
> en tu componente debera estar en español y no en ingles.

Despues instala los modulos de node.js con el siguiente comando:
```
npm install
```

Finalmente ejecuta el proyecto con el siguiente comando:
```
npm start
```

Si todo salio bien, puedes empezar a hacer cambios en el repositorio.

### Subir cambios
Si ya tienes cambios significativos y los quieres subir para compartirlos, utiliza los siguientes comandos:

Añade todos cambios en el repositorio:
```
git add -A
```

Explica los cambios (en pocas palabras):
```
git commit -m "Mi explicacion en comillas"
```

Baja los cambios actuales:
```
git pull origin nombre-del-modulo-del-siit
```

Sube los cambios que hiciste:
```
git push origin nombre-del-modulo-del-siit
```

> NOTA: Cuando subas los cambios es posible que te salga una ventana de GitHub.
> En esta solo tienes que meter tus credenciales para hacer subir los cambios.


## Conflictos
Un conflicto se crea cuando hubo cambios en ambos, mismo archivo y misma linea (o mismas lineas)
por parte de dos o mas personas. Usualmente `git` fallara en un `pull` despues de detectar conflictos.

Despues del fallo, puedes consultar en que archivos existen conflictos:
```
git status
```

Comunmente, los archivos afectado seran modificado para indicar sus conflictos de la siguiente manera:
```
<<<<<< HEAD
El cambio que otra persona hizo.
Un mal cambio.
======
El cambio que yo hice.
Arreglo del mal cambio.
>>>>>> mi-rama/mi-commit/otra-cosa
```

Borra los cambios no deseados y los artefactos que te genero `git`:
```
El cambio que otra persona hizo.
El cambio que yo hice.
Arreglo del mal cambio.
```

### Sincronizacion con tu equipo
Es obvio que los conflictos toman tiempo del desarrollo y que pueden ser riesgosos
(al borrar un cambio deseado), asi que la estrategia a tomar sera ponerte de acuerdo
con tu equipo para saber quien va realizar que, y en que orden se va realizar.
