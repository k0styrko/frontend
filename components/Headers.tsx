import React from 'react';

const Header = () => {
  return (
    <header className="bg-black py-3">
      <div className="mx-auto flex items-center justify-between ">
        
        <a href='/' className='pl-3'>
            <div className='pr-12'>
                <img src="icon.svg" alt="Logo" className="h-10" />
            </div>
        </a>
       
        <div className='pr-2'>
            <a href='/'>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mr-2">Игры</button> 
            </a>
        </div>
      </div>
  </header>
  )
};

export default Header;