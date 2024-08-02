export const CallToAction = () => {

  return    <div className="text-white overflow-hidden bg-black  py-[72px] sm:py-24">
    <div className="container   max-w-xl relative ">
      <img src="../assets/images/helix2.png" className='absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline' alt="" />
      <img src="../assets/images/emojistar.png" className='absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline' alt="" />
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
