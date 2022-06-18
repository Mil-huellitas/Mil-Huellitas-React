import React from 'react';
import {Label,GrupoInput,Input,Leyenda,IconoValidacion,} from '../../elements/donacion/Formulariopago';
import { faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput=({estado,cambiarEstado,tipo,label,placeholder,name,leyenda,expresion,funcion})=>{
    const onChange=(e)=>{
        cambiarEstado({...estado,campo:e.target.value})
    }

    const validacion=()=>{
        if (expresion){
            if(expresion.test(estado.campo)){
                cambiarEstado({...estado,valido:'true'});
            }else{
                cambiarEstado({...estado,valido:'false'});
            }
        }
        if (funcion){
        funcion();
        }
        }

    return(
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input 
                type={tipo} 
                placeholder={placeholder}
                id="nombre"
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                />
                <IconoValidacion 
                icon={estado.valido==='true'?faCheckCircle : faTimesCircle}
                valido={estado.valido}
                />
            </GrupoInput>
            <Leyenda valido={estado.valido}>{leyenda}</Leyenda>
        </div>
    );
}

export default ComponenteInput;
