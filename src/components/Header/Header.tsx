import React, { useState, useEffect } from "react";
import Nav from "./Nav";

interface Title {
  title: string;
  title1: string;
}

export default function Header(props: Title) {
  const { title, title1 } = props;
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:

  return (
    <>
      <div
        className='
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  bg- text-base-content shadow-sm
  '
      >
        <nav className='navbar w-full'>
          <div className='flex-1 font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl'>
            <div className='flex flex-1 md:gap-1 lg:gap-2'>
              <div className='flex items-center gap-2'>
                <a
                  href='/'
                  aria-current='page'
                  aria-label='HomePage'
                  className='flex-0 btn btn-ghost px-2 '
                >
                  <div className='font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl'>
                    <span className='lowercase text-primary-content'>
                      {title}
                    </span>
                    <span className='uppercase text-base-content'>
                      {title1}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex-0'>
            <Nav />
          </div>
        </nav>
      </div>
    </>
  );
}
