import { ReactComponent as UserCircle } from '../../assets/user-circle.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';


const Header = ({ date }) => {
    const parsedDate = new Date(date);

    return (
        <div className='flex flex-center'>
            <UserCircle style={{ width: '45px' }} />
            <div className='flex flex-col w-full'>
                <p className='text-purple font-medium'>Pablo de Marcos</p>
                {date && <p className='text-sm'>{parsedDate.toLocaleDateString()}</p>}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='flex justify-around border-t'>
            {
                [1, 2, 3, 4, 5].map(i => {
                    return <p key={i}>
                        <Heart style={{ width: '15px' }} />
                        <span className='text-sm'>0</span>
                    </p>
                })
            }
        </div>
    )
}

const PostTemplate = ({ body = '', date = '', id= '' }) => {
    return (
        <div className="box-1 p1 m1 flex flex-col justify-between">
            <Header date={date}/> 
            {body && <p className='p1'>{body}</p>}
            <Footer />
        </div>
    )
}

export default PostTemplate