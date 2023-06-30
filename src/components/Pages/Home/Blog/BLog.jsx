import blogimg from '../../../../../src/assets/images/blogimg1.png'
import Typewriter from 'react-ts-typewriter';

const BLog = () => {
    return (
        <div className="my-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">About Me</h2>
            <hr />

            <div className='flex justify-center items-center mt-10 rounded-3xl bg-gradient-to-r from-slate-300 via-stone-300 to-zinc-100 sm:relative transition-all duration-300 transform sm:hover:scale-105 hover:-translate-y-2 '>
                <div style={{ alignItems: "center", justifyContent: "center" }} className='grid sm:grid-cols-1 lg:grid-cols-2'>
                    <div className=''>
                        <img className='w-[350px] lg:ms-20 sm:ms-3' src={blogimg} alt="" />
                    </div>
                    <div className='lg:w-[550px] sm:w-[350px] lg:-ms-10 sm:ms-3 font-semibold'>
                        <p>
                            <span className='text-purple-800'><Typewriter text='Assalamualikum, I am Tamzid Ull Monir .' /></span>
                            <br /> A passionate web developer with a keen eye for web development. With a deep love for creativity and a desire to make a positive impact, I constantly strive to push the boundaries of my craft. Whether it's through captivating designs, innovative solutions, or engaging . I believe that every project is an opportunity for growth, and I approach each one with curiosity, enthusiasm, and a commitment to excellence. My goal is to create meaningful experiences that resonate with audiences and leave a lasting impression. Join me on this exciting journey as we bring ideas to life and make a difference together.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BLog;