import { ReactComponent as UserCircle } from '../../assets/user-circle.svg';
import { ReactComponent as PencilAlt } from '../../assets/pencil-alt.svg';

const Header = () => {
    return (
        <div className='flex flex-center'>
            <UserCircle style={{ width: '45px' }} />
            <input className='w-full input-1' placeholder='Quiero...'/>
        </div>
    )
}

const Footer = ({ setToPublish }) => {
    //V2: Se deberia cambiar 'actions' a un array de objetos que contenga el label, icono y el color que corresponda
    const actions = ['publicar','felicitar','evento','vender','asistencia'];

    const handleClick = () => {
        setToPublish(true);
    }

    return (
        <div className='flex justify-around border-t'>
            {
                actions.map((act, i) => {
                    return (
                        <button key={i} className='flex flex-center button-1 pointer' onClick={(e) => {
                            e.preventDefault();
                            if(act === 'publicar'){
                                handleClick();
                            }
                        }}>
                            <PencilAlt style={{ width: '15px' }}/>
                            <p className='text-sm'>{act}</p>
                        </button>
                    )
                })
            }
        </div>
    )
}

const InputTemplate = ({ setToPublish }) => {
    return (
        <div className="box-1 flex flex-col justify-between">
            <Header />
            <Footer setToPublish={setToPublish}/>
        </div>
    )
}

export default InputTemplate;