import React, {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,MensajeExito,MensajeError} from '../../elements/donacion/Formulariopago';
import Boton from '../boton/boton';
import ComponenteInput from './Input';
import './Form_pago.css';
import Huella from '../../assets/img/donacion/Union.png';

const Form = () => {
      const [nombre, cambiarNombre] = useState({campo: '', valido: null});
      const [apellido, cambiarApellido] = useState({campo: '', valido: null});
      const [ciudad, cambiarCiudad] = useState({campo: '', valido: null});
      const [municipio, cambiarMunicipio] = useState({campo: '', valido: null});
      const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
      const [apartamento, cambiarApartamento] = useState({campo: '', valido: null});
      const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
      const [correo, cambiarCorreo] = useState({campo: '', valido: null});
      const [documento, cambiarDocumento] = useState({campo: '', valido: null});
      const [documenton, cambiarDocumenton] = useState({campo: '', valido: null});
      const [terminos,cambiarTerminos]= useState(false);
      const [formularioValido,cambiarFormularioValido]= useState(null); 
  
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono:/^\d{7,14}$/,
      ciudad:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      municipio:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      direccion:/^[a-zA-Z0-9\s]+ N [a-zA-Z0-9-]+$/,
      apartamento:/^[a-zA-Z0-9\s]+$/,
      documenton:/^\d{7,14}$/,
      documento:/^[c,t,i,n,eC,N,T,I,E,C.]+$/
    }
      
      const onChangeTerminos=(e)=>{
      cambiarTerminos(e.target.checked);
      }
      
      const onSubmit = (e) => {
        e.preventDefault();
      
        if(
          nombre.valido === 'true' &&
          apellido.valido === 'true' &&
          ciudad.valido === 'true' &&
          municipio.valido === 'true' &&
          direccion.valido === 'true' &&
          apartamento.valido === 'true' &&
          correo.valido === 'true' &&
          telefono.valido === 'true' &&
          documento.valido === 'true' &&
          documenton.valido === 'true' &&
          terminos
        ){
          cambiarFormularioValido(true);
          cambiarNombre({campo: '', valido: null});
          cambiarApellido({campo: '', valido: null});
          cambiarCiudad({campo: '', valido: null});
          cambiarMunicipio({campo: '', valido: null});
          cambiarDireccion({campo: '', valido: null});
          cambiarApartamento({campo: '', valido: null});
          cambiarCorreo({campo: '', valido: null});
          cambiarTelefono({campo: '', valido: null});
          cambiarDocumento({campo: '', valido: null});
          cambiarDocumenton({campo: '', valido: null});
      
          // ... 
        } else {
          cambiarFormularioValido(false);
        }
      }
  
    return (
      <main className='mainform'>
        <img src={Huella} alt=''className="Huella__top"/>
        <img src={Huella} alt=''className="Huella__bottom"/>
        <Formulario action="" onSubmit={onSubmit}>
  
          <ComponenteInput
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="Ingresa tu nombre"
          name="nombre"
          leyenda="El nombre solo puede contener letras y espacios."
          expresion={expresiones.nombre}
          />

          <ComponenteInput
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo="text"
          label="Apellido"
          placeholder="Ingresa tu apellido"
          name="apellido"
          leyenda="El nombre solo puede contener letras y espacios."
          expresion={expresiones.apellido}
          />

          <ComponenteInput
          estado={ciudad}
          cambiarEstado={cambiarCiudad}
          tipo="text"
          label="Ciudad"
          placeholder="Ingresa tu Ciudad"
          name="ciudad"
          leyenda="El nombre de la ciudad solo puede contener letras y espacios."
          expresion={expresiones.ciudad}
          />

          <ComponenteInput
          estado={municipio}
          cambiarEstado={cambiarMunicipio}
          tipo="text"
          label="Barrio"
          placeholder="Ingresa tu Barrio"
          name="municipio"
          leyenda="El nombre del barrio solo puede contener letras y espacios."
          expresion={expresiones.municipio}
          />

          <ComponenteInput
          estado={direccion}
          cambiarEstado={cambiarDireccion}
          tipo="text"
          label="Dirección"
          placeholder="Ingresa tu Dirección"
          name="direccion"
          leyenda="La dirección solo puede contener números, letras y espacios."
          expresion={expresiones.direccion}
          />

          <ComponenteInput
          estado={apartamento}
          cambiarEstado={cambiarApartamento}
          tipo="text"
          label="Apartamento"
          placeholder="Apartamento,bloque, etc."
          name="apartamento"
          leyenda="El número de apartamento solo puede contener números, letras y espacios."
          expresion={expresiones.apartamento}
          />

          <ComponenteInput
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Teléfono"
          placeholder="Ingresa tu número de teléfono"
          name="telefono"
          leyenda="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          expresion={expresiones.telefono}
          />

          <ComponenteInput
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="Ingresa tu correo electrónico"
					name="correo"
					leyenda="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresion={expresiones.correo}
          />

          <ComponenteInput
          estado={documento}
          cambiarEstado={cambiarDocumento}
          tipo="text"
          label="Tipo de documento"
          placeholder="Ingresa el tipo de documento"
          name="documento"
          leyenda="El tipo de documento solo puede contener letras y puntos."
          expresion={expresiones.documento}
          />

          <ComponenteInput
          estado={documenton}
          cambiarEstado={cambiarDocumenton}
          tipo="text"
          label="Tipo de documento"
          placeholder="Ingresa el número de documento"
          name="documenton"
          leyenda="El número de Documento solo puede contener números."
          expresion={expresiones.documenton}
          />
          
          <ContenedorTerminos>
            <Label>
              <input 
              type="checkbox" 
              name="terminos" 
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
              />Acepto Términos y Condiciones
            </Label>
          </ContenedorTerminos>
          {formularioValido===false && <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b>Por favor diligenciar el formulario correctamente
              </p>
            </MensajeError>}
            <ContenedorBotonCentrado>
              <Boton 
              type="submit"
              text={"Ir a Pago"}
              />
                {formularioValido===true && <MensajeExito>Formulario enviado Exitosamente</MensajeExito>}
            </ContenedorBotonCentrado>
  
        </Formulario>
      </main>
    );
  }

export default Form;