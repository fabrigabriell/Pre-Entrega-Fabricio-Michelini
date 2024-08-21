import { useState, useEffect } from "react"

const ContadorSec = () => {

    const [contador,setContador] = useState(0)

useEffect(

() => {

    const intervalId = setInterval(()=>{
        setContador(contador => contador + 1)
    },2000);

    return() => {
        clearInterval(intervalId)
    }
},

[]

)    

  return (
    <div>
        <h1>Numero: {contador}</h1>
    </div>
  )
}

export default ContadorSec