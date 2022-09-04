const Cover = () => {
  return (
    <>
      <div className='bg-base-200 flex flex-col items-center gap-20 py-20'>
        <div className='text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0'>
          <div
            id='component'
            className='className="flex w-full grid-flow-row grid-cols-3 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-10 pb-10 xl:grid xl:overflow-x-auto xl:px-4'
          >
            <div className='flex flex-nowrap'>
              <div className='inline-block px-3'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                  <figure>
                    <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'>
                      <button className='btn btn-primary'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-block px-3'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                  <figure>
                    <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'>
                      <button className='btn btn-primary'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-block px-3'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                  <figure>
                    <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'>
                      <button className='btn btn-primary'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
