interface CardProps {
  title: string;
  description: string;
  btntxt: string;
}

const Card = (props: CardProps) => {
  const { title, description, btntxt } = props;
  return (
    <div className='inline-block px-3'>
      <div className='card w-72 bg-base-100 shadow-xl md:w-80 lg:w-96'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>{btntxt}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
