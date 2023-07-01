import blogimg from '../../../../../src/assets/images/blogimg1.png'
import Typewriter from 'react-ts-typewriter';

const BLog = () => {
    return (
        <div className="my-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center mt-10">
        About Me
      </h2>
            <hr className='mt-5'/>

            <div className='flex justify-center items-center mt-10 rounded-3xl bg-gradient-to-r from-slate-300 via-stone-300 to-zinc-100 sm:relative transition-all duration-300 transform sm:hover:scale-105 hover:-translate-y-2 '>
                <div style={{ alignItems: "center", justifyContent: "center" }} className='grid sm:grid-cols-1 lg:grid-cols-2'>
                    <div className=''>
                        <img className='w-[350px] lg:ms-20 sm:ms-3' src={blogimg} alt="" />
                    </div>
                    <div className='lg:w-[550px] sm:w-[350px] lg:-ms-10 sm:ms-3 font-semibold'>
                        <p>
                            <span className='text-purple-800'><Typewriter text='Assalamualikum, I am Tamzid Ull Monir .' /></span>
                            <br />As a passionate programmer and JavaScript/React developer, I thrive on turning complex ideas into functional and user-friendly applications. With a solid understanding of programming principles and a strong problem-solving mindset, I enjoy tackling challenges head-on and finding innovative solutions. Constantly seeking to expand my knowledge and skill set, I am dedicated to staying up-to-date with the latest technologies and best practices in the industry. Whether it's building interactive user interfaces, implementing efficient algorithms, or collaborating with a team to deliver high-quality software, I am driven by a genuine love for coding and a desire to create impactful digital experiences..
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BLog;