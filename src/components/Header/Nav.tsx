import React, { useEffect } from "react";
import { useState } from "react";

const Links = () => {
  return (
    <>
      <div className='text-center '>
        <a className='btn btn-ghost normal-case text-lg' href='/about'>
          About
        </a>
        <a className='btn btn-ghost normal-case text-lg' href='/contact'>
          Contact
        </a>
        <a
          className='btn btn-square btn-ghost'
          href='https://github.com/DevRSC'
          aria-label="DevRSC's Github"
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
            />
          </svg>
        </a>
      </div>
    </>
  );
};

const Nav = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log;
  };
  return (
    <>
      <nav>
        <div className='hidden sm:flex'>
          <Links />
        </div>
        <div className='sm:hidden relative'>
          <div className='flex-none'>
            <button className='btn btn-square btn-ghost' onClick={toggleLinks}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-5 h-5 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            {showLinks && (
              <div className='dropdown right-0 top-12 dropdown-end absolute z-50  p-2 rounded-box shadow bg-base-100'>
                <Links />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
