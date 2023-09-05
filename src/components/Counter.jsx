import React from 'react'

const Counter = ({ count, sumar, restar }) => {
    return (
        <div>
            {/* Muestra el valor actual del contador */}
            <p>Valor: {count}</p>

            {/* Botón para aumentar el contador al hacer clic */}
            <button onClick={() => sumar() }>Sumar</button>

            {/* Botón para disminuir el contador al hacer clic */}
            <button onClick={() => restar()}>Restar</button>
        </div>
    )
}

export default Counter
