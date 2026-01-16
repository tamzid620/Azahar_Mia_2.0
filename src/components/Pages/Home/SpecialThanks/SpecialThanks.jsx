import thanks from '../../../../../src/assets/icons/thank_you.jpg';

const SpecialThanks = () => {
    return (
        <div>
             <h2 className="font-bold text-3xl uppercase flex justify-center mt-10">
        Special Thanks
      </h2>
      <div className="divider"></div>
      <div className='flex justify-center items-center mt-10 rounded-sm  p-5 font-semibold text-lg text-center'>
      {/* <div style={{ alignItems: "center", justifyContent: "center" }} className='grid sm:grid-cols-1 lg:grid-cols-2'>
        <div className='me-3'><img className='rounded-lg' src={thanks} alt="" />
        </div>
        <div>
        </div>
      </div> */}
        <p>Special thanks to <span className="text-red-500">Sumaiya Sultana</span>, <span className="text-red-500">Jiinia Naznin Aanika</span>, and <span className="text-red-500">Mizanul Alam</span> who have generously contributed their time and knowledge in helping us collect the valuable information presented on this website. Your expertise and willingness to share insights have been instrumental in creating a comprehensive resource for our users. We are extremely grateful for your support and dedication, as it has greatly enriched the content and enhanced the overall quality of this platform. Your contributions have made a significant impact, and we extend our heartfelt appreciation for your valuable input.
        </p>
      </div>
        </div>
    );
};

export default SpecialThanks;