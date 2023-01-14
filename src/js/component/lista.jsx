import React from "react"


const Lista = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
        <div>
            {!props.tarea ? ("") : (           
            <span>{props.tarea}
             <button className="btn-danger" onClick={borrarTarea}><strong>X</strong></button> 
             </span>
             )}

          

        </div>    
    );
}


export default Lista;