import Formulario from "../components/Formulario"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const EdicarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  const {id} = useParams()

  useEffect(()=> {
      const obtenerClienteAPI = async () => {
          try {
              const url = `http://localhost:3000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error)
          }
          setTimeout(() => {
              setCargando(!cargando) 
          }, 1000);   
      }
      obtenerClienteAPI()
  },[])

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p>Utiliza este formulario para editar los datos del cliente</p>
        {cliente?.nombre ? (
          <Formulario cliente={cliente} cargando={cargando}/>
        ) : <p>El ID del cliente no es válido</p> }
    </>
  )
}

export default EdicarCliente