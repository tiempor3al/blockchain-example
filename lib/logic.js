/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Inscripcion} inscripcion - the trade to be processed
 * @transaction
 */
async function inscripcion(inscripcion) {
    
  	const alumno = inscripcion.alumno;
  	const asignatura = inscripcion.asignatura;
  
  	const parametroAlumno = `resource:org.example.mynetwork.Alumno#${alumno.numeroCuenta}`;
  	const parametroAsignatura = `resource:org.example.mynetwork.Asignatura#${asignatura.clave}`;
  
  	const results = await query('selectInscripciones', {alumno : parametroAlumno, asignatura : parametroAsignatura});
  
   	if(results.length > 0){
    	throw new Error('Alumno ya inscrito a la asignatura');
    }
  
  	
}
