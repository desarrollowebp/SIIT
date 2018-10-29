#En esta guía aprenderemos a pasar los datos y variables de nuestro HTML a ng en angular.
1- Lo primero que debemos hacer es identificar que datos estamos usando, como ejemplo usare mi tabla de
horario-reinscripcion

|------------------------------------------------------------------------------|
|                Horario de Reinscripción AGOSTO-DICIEMBRE/2018                |
|------------------------------------------------------------------------------|
|       Nombre     | Alejandro Marrufo Quintana             Biblioteca | N     |
|------------------------------------------------------------------------------|
|       Fecha      | 18-Agosto-2018	                       Escolares  | N     |
|------------------------------------------------------------------------------|
|       Hora       | 10:40AM	                               Financieros| N     |
|------------------------------------------------------------------------------|
|       Autorizado | S                                      Encuesta   | N     |
|------------------------------------------------------------------------------|

#Como se puede observer estoy usando las siguientes variables:
horaReinscripcion: [{fecha,horaReinscripcion,autorizado,biblioteca,escolares, financieros,encuesta}]

Tambien necesito la variable de  Nombre, pero esa se obtiene de las variables globales, pero como aun
no se implementan los servicios en el back, la utilizaremos por esta vez, lo que nos daría por resultado:
horaReinscripcion: [{nombre, fecha, horaReinscripcion, autorizado, biblioteca, escolares, financieros, encuesta}]

#2- El proceso que sigue, es el de pasar nuestros contenedores con la información al componente ts en nuestro modulo:  
  Abajo del ng content, pondremos algo parecido a lo siguiente:
  
   `ngOnInit() {`
  }
  alumno = [
    { dato: 'Nombre', nombre: 'Alejandro Marrufo Quintana', tipoadeudo: 'Biblioteca', adeudo: 'N' }
  ]
  fecha = [
    { dato: 'Fecha', fecha: '18-Agosto-2018', tipoadeudo: 'Escolares', adeudo: 'N' }
  ]
  hora = [
    { dato: 'Hora', hora: '10:40AM', tipoadeudo: 'Financieros', adeudo: 'N' }
  ]
  autorizado = [
    { dato: 'Autorizado', autorizado: 'S', tipoadeudo: 'Encuesta', adeudo: 'N' }
  ]

}

#Eso sería todo lo que agregariamos al TS

#3-HTML
#-Ahora que ya tenemos la variables en el ts, solo falta llamarlas en nuestro html
Para eso haremos lo siguiente:

<tbody>
			<tr>
			<tr *ngFor="let alumno of alumno">
				<td>{{alumno.dato}}</td>
				<td>{{alumno.nombre}}</td>
				<td>{{alumno.tipoadeudo}}</td>
				<td>{{alumno.adeudo}}</td>
			</tr>

			<tr *ngFor="let fecha of fecha">
				<td>{{fecha.dato}}</td>
				<td>{{fecha.fecha}}</td>
				<td>{{fecha.tipoadeudo}}</td>
				<td>{{fecha.adeudo}}</td>
			</tr>

			<tr *ngFor="let hora of hora">
				<td>{{hora.dato}}</td>
				<td>{{hora.hora}}</td>
				<td>{{hora.tipoadeudo}}</td>
				<td>{{hora.adeudo}}</td>
			</tr>

			<tr *ngFor="let autorizado of autorizado">
				<td>{{autorizado.dato}}</td>
				<td>{{autorizado.autorizado}}</td>
				<td>{{autorizado.tipoadeudo}}</td>
				<td>{{autorizado.adeudo}}</td>
			</tr>
		</tbody>

#Con eso deberia funcionar su código, si tienen dudas pueden revisar la rama de Horario Reinscripción, pero tengan
#cuidado de no borrar nada.
