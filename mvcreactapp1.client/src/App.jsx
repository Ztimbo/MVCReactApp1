import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
    const [nombre, setNombre] = useState('Dario');

    useEffect(() => {
        console.log(nombre);
    }, [nombre]);

    function cambiarNombre() {
        setNombre('Miguel');
    }

    return (
        <div className="container-fluid">
            <h1>El nombre actual es: {nombre}</h1>
            <button onClick={() => cambiarNombre()}>Cambiar nombre</button>
        </div>
    );
}

export default App;