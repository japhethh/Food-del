import React from 'react'
const Header = () => {
  return (
    <header className="h-[40vw] bg-no-repeat bg-contain bg-[url('./header_img.png')] relative  " >
    <div className="header_contents absolute bottom-[15%] max-md:bottom-[10%] left-[6vw] w-[50%] flex flex-col items-start ">
      <h2 className="font-semibold text-white font-size text-[50px]">Order your favorite food here</h2>
      <p className="py-5 text-white">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
      <button className=" bg-gray-200 rounded-full py-4 px-8 max-md:py-2 max-md:px-6">View Menu</button>
    </div>
    
    </header>
  )
}

export default Header