import bg from "../public/bg.svg";

const PersonalIntro = () => {
  return (
    <>
      <div className='hero bg-base-200 min-h-fit bg-gradient-to-br pb-44'>
        <div className='hero-content mx-auto max-w-md text-center md:max-w-full'>
          <div>
            <h2 className='mt-20 text-4xl font-bold md:text-6xl mb-10'>
              Hi I'm Ramil, a Full Stack Developer
            </h2>
            <p className='mx-auto mb-5 w-full max-w-lg'>
              I am an aspiring Full Stack Developer with a passion for learning
              and creating. I am currently studying Computer Science at the
              Technological University of the Philippines <b>TUP</b>. I am also
              a self-taught developer with a strong interest in web development.
              Currently I am learning React with different libraries and
              frameworks. I am also learning NodeJS and ExpressJS for the
              backend. I'm naturally curious with new things that the Web
              Development world has to offer
            </p>
          </div>
        </div>
        {/* <img
          src='./public/bg.svg'
          className='fill-secondary col-start-1 row-start-1 h-auto w-full'
        /> */}
      </div>
    </>
  );
};

export default PersonalIntro;
