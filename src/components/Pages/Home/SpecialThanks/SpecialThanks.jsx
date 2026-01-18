import thanks from '../../../../../src/assets/icons/thank_you.jpg';

const SpecialThanks = () => {
    return (
      <div className='bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16'>
        <div className='container mx-auto'>
             <h2 className="font-bold text-3xl uppercase flex justify-center mt-10 text-[#0ea5e9]">
        Special Thanks
      </h2>
      <div className='flex justify-center items-center mt-2 rounded-sm p-5 font-semibold text-lg text-center text-para_color'>
      
        <p>Special thanks to <span className="text-sky-400">Sumaiya Sultana</span>, <span className="text-sky-400">Jiinia Naznin Aanika</span>, and <span className="text-sky-400">Mizanul Alam</span> who have generously contributed their time and knowledge in helping us collect the valuable information presented on this website. Your expertise and willingness to share insights have been instrumental in creating a comprehensive resource for our users. We are extremely grateful for your support and dedication, as it has greatly enriched the content and enhanced the overall quality of this platform. Your contributions have made a significant impact, and we extend our heartfelt appreciation for your valuable input.
        </p>
      </div>
        </div>
      </div>
    );
};

export default SpecialThanks;