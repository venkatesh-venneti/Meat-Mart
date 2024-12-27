import './Home.css';

const Home = ({ 
  imgSrc,
  imgAlt,
  title,
  description,
  btnText,
  addToCart // Receive addToCart function
}) => {

  const handleAddToCart = () => {
    const item = { imgSrc, imgAlt, title, description }; 
    addToCart(item); 
  };

  return (
    <div className='card-container'>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
      <div className='card'>
        <img src={imgSrc} alt={imgAlt} className='card-img' />
        <h1 className='card-title'>{title}</h1>
        <p className='card-desc'>{description}</p>
        <button className='card-btn' onClick={handleAddToCart}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Home;
