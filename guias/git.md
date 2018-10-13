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

> NOTA: En parte del email utiliza el mismo que en el registro a GitHub


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


## Utilizacion del repositorio

### Prepararacion de cambios
Despues de clonarlo, deberas crear una rama. Esta te permitira trabajar libremente en tu modulo
del SIIT sin que haya conflictos con otros cambios. Se utilizara el siguiente comando:
```
git checkout -b nombre-del-modulo-del-siit
```

Despues instala los modulos de node.js con el siguiente comando:
```
npm install
```

Ejecuta el proyecto con el siguiente comando:
```
npm start
```

Si todo salio bien, puedes empezar a hacer cambios en el repositorio.

### Subir cambios
Si ya tienes cambios significativos y los quieres subir para compartirlos, utiliza los siguientes comandos:

#### Añade todos cambios en el repositorio
```
git add -A
```

#### Explica los cambios (en pocas palabras)
```
git commit -m "Mi explicacion en comillas"
```

#### Sube los cambios
```
git push origin nombre-del-modulo-del-siit
```

> NOTA: Cuando subas los cambios es posible que te salga una ventana de GitHub.
> En esta solo tienes que meter tus credenciales para hacer subir los cambios
