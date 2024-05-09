import { useState } from 'react'
import './Tienda.css'

function Tienda() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div id="tienda">
        <p id="titulo">TIENDA</p>
      </div>
      <footer id="pie">
        <p>LA TIENDITA DEL ABUELO</p>
      </footer>
    </body>
    </>
  )
}

export default Tienda
