import helix from '../assets/images/helix2.png'
import emoj from '../assets/images/emojistar.png'
import Image from "next/image";
export const CallToAction = () => {

  return    <div className="text-white overflow-hidden bg-black  py-[72px] sm:py-24">
    <div className="container  max-w-xl relative ">
      <Image src={helix} className='absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline' />
      <Image src={emoj} className='absolute top-6 left-[calc(100%+36px)] hidden sm:inline' />
        <h2 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold">
         Get Instant Access
      </h2>
      <div className='max-w-xl mx-auto'>
              <p className='text-center mt-5  text-xl  text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Et, repudiandae enim? Cum fuga tempore exercitationem!</p>
      </div>
      <form className="flex mt-12 flex-col max-w-sm mx-auto sm:flex-row gap-2.5">
        <input type="email" placeholder="ziadalaa984@gmail.com" className="h-12 sm:flex-1 bg-white/20 rounded-lg px-5 font-medium" />
        <button className="bg-white h-12 font-medium rounded-lg px-5 text-black">Get Access</button>
      </form>
      </div>
    </div>
};
