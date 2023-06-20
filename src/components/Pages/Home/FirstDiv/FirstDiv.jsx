import { FaLongArrowAltRight } from 'react-icons/fa';

const FirstDiv = () => {
    return (
        <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-10 justify-between bg-blue-950 text-white font-semibold">
            <div>
                <h1>Get To Know <br />
                    Family Members</h1>
                <p className='flex gap-3 items-center mt-5'>OPEN DIRECTORY <FaLongArrowAltRight/></p>
            </div>
            <div>
                <h1>Get To Know <br />
                    Family Members</h1>
                <p className='flex gap-3 items-center mt-5'>OPEN DIRECTORY <FaLongArrowAltRight/></p>
            </div>
            <div>
                <h1>Get To Know <br />
                    Family Members</h1>
                <p className='flex gap-3 items-center mt-5'>OPEN DIRECTORY <FaLongArrowAltRight/></p>
            </div>
            <div>
                <h1>Get To Know <br />
                    Family Members</h1>
                <p className='flex gap-3 items-center mt-5'>OPEN DIRECTORY <FaLongArrowAltRight/></p>
            </div>
        </div>
    );
};

export default FirstDiv;