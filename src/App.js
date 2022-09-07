import './App.css';
import Backlog from "./componentes/Backlog";
function App() {
  return (
    <div className="App">
      <h1>Produc Backlog</h1>
        <div className= "contenedor principal">
         <div className="contenedor-historia">
         <Backlog
         id="1"
         alias="Crear agenda"
         enunciado="Como encargada del área de depilación laser en una clínica de cuidado personal quiero que las empleadas de recepción cuenten con un sistema que les permita agilizar el proceso de calendarización de las citas en una agenda virtual." />
         <Backlog
         id="2"
         alias="Ingresar parámetros de búsqueda" 
         enunciado="Como recepcionista quiero que al ingresar datos de una clienta como nombre o número de cliente pueda acceder a sus datos." /> 
         <Backlog
         id="3"
         alias="Consultar servicios disponibles"
         enunciado="Como recepcionista necesito saber con qué servicios cuenta la clienta para preguntarle cuantos de estos desea agregar a su próxima cita y así asignar el tiempo necesario para su sesión." />
         <Backlog
         id="4"
         alias=" Consultar historial de citas"
         enunciado="Como recepcionista quiero consultar el registro de la última cita de la clienta para poder estimar automáticamente su próxima cita para poder guardarla en la agenda." />
         <Backlog
         id="5"
         alias="Agregar elementos que comúnmente integran una agenda física"
         enunciado=" Como recepcionista quiero que el programa cuente con elementos visuales que ayuden a identificar fácilmente los diferentes elementos de mi agenda." />
         <Backlog
         id="6"
         alias="Agregar colores para identificar los espacios ocupados en la agenda"
         enunciado="Como recepcionista quiero que el programa cuente con elementos visuales que ayuden a identificar los espacios ocupados en la agenda para agilizar la ubicación de los espacios disponibles." />
         <Backlog
         id="7"
         alias="Agregar colores para identificar los estados de las citas"
         enunciado="Como recepcionista quiero que el programa cuente con elementos visuales que me ayuden a conocer el estado de las citas, confirmadas, no confirmadas y canceladas." />
         </div>
        </div>
      </div>
    
  );
}

export default App;
