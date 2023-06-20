import { Link } from 'react-router-dom';
import banner from '../../../../../src/assets/images/family_happy.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "500px", }}>
            <div
                style={{
                    opacity: '0.5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }}>
                <p className='font-bold text-4xl uppercase mt-36' style={{ color: 'white', textAlign: 'center' }}>Azahar Mia's Family
                    <br />
                    <span className='text-sm font-semibold'>Azahar Mia's Family Generation is a remarkable website dedicated to tracing and
                        <br />
                        celebrating the rich lineage of the Azahar Mia family.</span>
                    <br />
                    <button className='btn font-bold'>
                        <Link to="/details">Get Start </Link>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Banner;