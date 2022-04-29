import { useState } from 'react';
import { ReactComponent as PencilAlt } from '../../assets/pencil-alt.svg';
import { ReactComponent as X } from '../../assets/x.svg';
import { useCreatePostMutation } from '../../services/posts';

const PublicationTypes = () => {
  const [activeType, setActiveType] = useState('post')
  //V2: en 'types' se debiera incluir el icono  correspondiente al tipo de publicación
  const types = [
    {
      label: 'Publicación',
      tag: 'post',
    },
    {
      label: 'Anuncio Oficial',
      tag: 'ad',
    },
    {
      label: 'Anuncio Oficial',
      tag: 'offer-help',
    },
    {
      label: 'Objeto Perdido',
      tag: 'lost-object',
    },
    {
      label: 'Encuesta',
      tag: 'poll',
    },
  ]

  return (
    <div className='flex flex-col justify-around'>
      <p>Tipo de Publicación</p>
      <div className='flex border-2 border-r-1 justify-between'>
        {
          types.map(type => {
            return (
              <div 
                key={type.tag} 
                onClick={() => setActiveType(type.tag)}
                className={`${activeType === type.tag ? 'bg-purple text-white' : 'bg-white'} p0-5 pointer flex items-center`}
                >
                  <PencilAlt style={{ width: '15px' }} />
                  <span>{type.label}</span>
              </div>
          )})
        }
      </div>
      
    </div>
  )
}

const PublishTemplate = ({ setToPublish }) => {
  const [ createPost ] = useCreatePostMutation();
  const [message, setMessage] = useState('')
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='flex justify-between text-white bg-purple p0-5'>
        <div className='flex'>
          <PencilAlt style={{ width: '20px' }} />
          <p>publicar</p>
        </div>
        <X className='pointer' style={{ width: '20px' }} onClick={() => setToPublish(false)}/>
      </div>
      {/* Body */}
      <div className='p1'>
        <PublicationTypes/>
        <p className='m1-top'>Mensaje</p>
        <textarea className='textarea-1' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
        <button className='button-2 m1-top pointer' onClick={async (e) => {
          e.preventDefault();
          //V2: se debiera validar que el mensaje esta vacio con una alerta
          if(message) {
            console.log('publish message...')
            setMessage('')
            await createPost(message)
          }
        }}>Crear publicación</button>
      </div>
      
    </div>
  )
}

export default PublishTemplate