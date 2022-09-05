const Introduction = () => {
  return (
    <>
      <div className=''>
        <div className='from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20'>
          <div className='hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20'>
            <div className='lg:pl-10 lg:pb-32'>
              <div className='mb-2 py-4 text-center lg:py-10 lg:text-left'>
                <h1 className='font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl'>
                  Hi there, I'm <span className='text-warning'>Ramil</span>
                </h1>
                <h2 className='font-title text-lg font-extrabold sm:text-2xl lg:text-3xl'>
                  I am an aspiring Web Developer <br />
                  On a mission to build the next big thing
                </h2>
              </div>
              <div className='flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0'></div>
              <div className='mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start'>
                <a
                  href='/components'
                  className='btn btn-ghost btn-active lg:btn-lg normal-case'
                >
                  <span className='hidden sm:inline'>XL 👌😎</span>
                  <span className='inline sm:hidden'>SM 👌😲</span>
                </a>
                <a href='/docs/install' className='btn lg:btn-lg normal-case'>
                  Know More
                </a>
              </div>
            </div>
          </div>
          <svg
            className='fill-secondary col-start-1 row-start-1 h-auto w-full'
            width='1600'
            height='595'
            viewBox='0 0 1600 595'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z'></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Introduction;
