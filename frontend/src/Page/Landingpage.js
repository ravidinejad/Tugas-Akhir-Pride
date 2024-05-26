import React from 'react';
import shoes from '../Assets/shoes.png';
import shoes2 from '../Assets/shoes-2.png';
import imagepride from '../Assets/imagepride.png';
import nikeairmax from '../Assets/nikeairmax.png';
import api from '../Assets/api.png';
import text from '../Assets/texttt.png';
import sepatu from '../Assets/fotosepatu.png';
import { Link } from 'react-router-dom';
import 'typeface-poppins'
import { Link as ScrollLink } from 'react-scroll';



const landingpage = () => {
  return (
    <div>
      {/* Konten halaman pertama */}
      <nav className="main-nav font-bold bg-white bg-opacity-90 p-4 flex justify-between items-center fixed w-full z-10">
  <h2 className="logo text-black font-bold text-2xl">PRIDE</h2>
  <ul className="flex justify-center w-full">
    <li className="mr-6">
    <ScrollLink to="home" smooth={true} duration={500} spy={true} exact="true">Home</ScrollLink>
    </li>
    <li>
    <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true">About</ScrollLink>
    </li>
  </ul>
</nav>


      {/* Section 1: Konten halaman utama */}
      <section id="home" className="flex justify-start items-center h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="w-[calc(50% - 100px)] ml-[150px] mr-[80px] ">
          <h1 className="text-5xl font-bold mb-4">Find, try on and<br /> shop trendy<br /> shoe styles</h1>
          <p className="text-lg mb-3">
            Shop with over 500 shoe styles<br />from popular brands and
            <br />designers
          </p>
          <div className="mt-5 flex items-center">
            <Link to="/LoginUser">
              <button className="mr-4 px-6 py-3 font-bold bg-black text-white rounded-full">Start Shopping</button>
            </Link>
          </div>
        </div>
        <div className="w-[calc(50% - 100px)] text-right">
          <img src={shoes} alt="" className="w-677 h-486 rounded-full" />
        </div>
      </section>
      {/* Konten halaman kedua */}
      
        <section id="about" className="mt-10 flex justify-start items-center h-screen">
          <img src={shoes2} alt="Sepatu" className="w-529 h-563 mr-20 ml-24" />
          <div>
            <h1 className="text-5xl font-bold mb-9">Proven Style,<br /> Preserved <br />Quality</h1>
            <p className=" text-base text-gray-600 mr-40 ">
            In 'Proven Style, Preserved Quality', we highlight the assurance of quality even in pre-owned footwear, ensuring that each pair maintains its standards and reliability over time. We emphasize that despite their pre-owned status, these shoes have been curated with care to ensure they meet the standards of durability and craftsmanship. Moreover, they continue to exude contemporary style and fashion, demonstrating that quality and trendiness are not mutually exclusive. Our collection embodies the essence of timeless elegance fused with modern flair, offering customers the confidence to step out in style while embracing sustainability and authenticity.
            </p>
          </div>
        </section>
     

      {/* Konten halaman ketiga */}
      <div className='mt-40 mb-40 bg-cover bg-center h-screen' style={{ backgroundImage: `url(${imagepride})` }}></div>

      {/* Konten halaman keempat */}
      <div className="w-[390px] h-[54px] relative">
        <div className="ml-10 [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[36px] leading-[42.1px] absolute top-0 left-0">
          Best Seller
        </div>
      </div>
      <div className="flex justify-center flex-wrap mb-20">

        <div className="flex-shrink-0 m-4">
          <div className="relative w-[280px] h-[330px] bg-white rounded-[23px] border-2 border-solid border-black">
            <div className="absolute w-[229px] h-[142px] top-[20px] left-[28px]">
              <img
                className="absolute w-[202px] h-[110px] top-[32px] left-[11px] object-cover"
                alt="Nicepng nike png"
                src={nikeairmax}
              />
              <img className="absolute w-[29px] h-[42px] top-0 left-[200px]" alt="Vector" src={api} />
            </div>
            <p className="absolute w-[235px] top-[178px] left-[22px] font-semibold text-black text-[19px] tracking-[0] leading-[normal]">
              Nike - Air Max 97 White Pure Platinum University Red
            </p>
            <div className="absolute w-[235px] top-[271px] left-[22px] font-semibold text-[#4a86e0] text-[18px] tracking-[0] leading-[normal]">
              Rp. 1xxx.xxx.xx
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-4">
          <div className="relative w-[280px] h-[330px] bg-white rounded-[23px] border-2 border-solid border-black">
            <div className="absolute w-[229px] h-[142px] top-[20px] left-[28px]">
              <img
                className="absolute w-[202px] h-[110px] top-[32px] left-[11px] object-cover"
                alt="Nicepng nike png"
                src={nikeairmax}
              />
              <img className="absolute w-[29px] h-[42px] top-0 left-[200px]" alt="Vector" src={api} />
            </div>
            <p className="absolute w-[235px] top-[178px] left-[22px] font-semibold text-black text-[19px] tracking-[0] leading-[normal]">
              Nike - Air Max 97 White Pure Platinum University Red
            </p>
            <div className="absolute w-[235px] top-[271px] left-[22px] font-semibold text-[#4a86e0] text-[18px] tracking-[0] leading-[normal]">
              Rp. 1xxx.xxx.xx
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-4">
          <div className="relative w-[280px] h-[330px] bg-white rounded-[23px] border-2 border-solid border-black">
            <div className="absolute w-[229px] h-[142px] top-[20px] left-[28px]">
              <img
                className="absolute w-[202px] h-[110px] top-[32px] left-[11px] object-cover"
                alt="Nicepng nike png"
                src={nikeairmax}
              />
              <img className="absolute w-[29px] h-[42px] top-0 left-[200px]" alt="Vector" src={api} />
            </div>
            <p className="absolute w-[235px] top-[178px] left-[22px] font-semibold text-black text-[19px] tracking-[0] leading-[normal]">
              Nike - Air Max 97 White Pure Platinum University Red
            </p>
            <div className="absolute w-[235px] top-[271px] left-[22px] font-semibold text-[#4a86e0] text-[18px] tracking-[0] leading-[normal]">
              Rp. 1xxx.xxx.xx
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-4">
          <div className="relative w-[280px] h-[330px] bg-white rounded-[23px] border-2 border-solid border-black">
            <div className="absolute w-[229px] h-[142px] top-[20px] left-[28px]">
              <img
                className="absolute w-[202px] h-[110px] top-[32px] left-[11px] object-cover"
                alt="Nicepng nike png"
                src={nikeairmax}
              />
              <img className="absolute w-[29px] h-[42px] top-0 left-[200px]" alt="Vector" src={api} />
            </div>
            <p className="absolute w-[235px] top-[178px] left-[22px] font-semibold text-black text-[19px] tracking-[0] leading-[normal]">
              Nike - Air Max 97 White Pure Platinum University Red
            </p>
            <div className="absolute w-[235px] top-[271px] left-[22px] font-semibold text-[#4a86e0] text-[18px] tracking-[0] leading-[normal]">
              Rp. 1xxx.xxx.xx
            </div>
          </div>
        </div>
        </div>
        {/* Konten halaman kelima */}<div>
        <img src={text} alt="Text" className="mt-40 mb-40 w-full h-full object-cover" />
        </div>
     
      {/* Konten halaman keenam */}
      
      <div className="relative">
  <img src={sepatu} alt="Sepatu" className="w-full h-full object-cover mb-[-90px]" />
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="text-center">
      <h1 className="text-white font-poppins text-5xl font-bold mb-9">SEARCHING FOR AFFORDABLE YET <br />TRENDY AND QUALITY SHOES</h1>
      <button className="px-6 py-3 font-bold bg-blue-600 text-white rounded-full">Explore Now</button>
    </div>
    
    </div>
    
</div>
<div className="flex justify-center items-center h-screen " style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="text-[30vw] font-bold text-blue-700 ">PRIDE</h1>
    </div>
  </div>

  );
};

export default landingpage;