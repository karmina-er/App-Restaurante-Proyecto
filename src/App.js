import './App.css';
import Destacado from './componentes/Destacado';


function App() {
  return (
    <div className="App">
      <div className='menu'>
      <ul >
                    <li ><a href="Destacado.js">Inicio</a></li>
                  
                    <li ><a href="#">Iniciar sesión</a></li>
                </ul>

      </div>
      <div>
      <h1>
        Restaurante Augurio 
      </h1>
      <h2> Platillos destacados en su forma más pura
      </h2>
      <div className='cuadros-destacado'>
      <Destacado 
      nombre='Chile en nogada'
      precio='$450.00'
      descripcion='Chile poblano relleno de carne de res y puerco, mezclados con fruta: plátano, manzana, pera, durazno, bañados con una salsa de nuez de castilla, queso de cabra, leche y jerez.'
      imagen='chile'/>
      <Destacado
      nombre='Pulpo en adobo de chile ancho'
      precio='$380.00'
      descripcion='Pulpo adobado a las brasas, acompañado de un adobo de chile ancho con vegetales rostizados y condimentados con vinagreta del miel. 
      '
      imagen='pulpo'/>
      <Destacado
      nombre='Ensalada campesina'
      precio='$120'
      descripcion='Mix de lechugas, espinaca baby, tomates cherry, cebolla morada, queso de vaca, pera asada, cacahuate garapiñado aderezada con una vinagreta de pepita.'
      imagen='ensalada'
      />
      </div>
      </div>
    </div>
  );
}

export default App;
