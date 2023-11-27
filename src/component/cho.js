import React from 'react';
import './f&g.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({ imageUrl, altText, role, description }) => (
  <a href="#" className="card-item">
    <img src={imageUrl} alt={altText} />
    <span className={role.toLowerCase()}>{role}</span>
    <h3>{description}</h3>
    <div className="arrow">
      <FontAwesomeIcon icon={faArrowRight} className="card-icon" />
    </div>
  </a>
);

const ImageGallerycho = () => {
  const cards = [
    {
      imageUrl: "https://t4.ftcdn.net/jpg/03/22/55/57/240_F_322555727_zdf5142hYGHWuJHgx2zaMtNiL8kgK6k9.jpg",
       role: "KitKat",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.nKyczKBioxenxVgh9GjS4QHaD0&pid=Api&P=0&h=180",
      role: "Dairy Milk",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP.Ok2CCbQfnByy6xq_BE2NgAHaHa&pid=Api&P=0&h=180",
     
      role: "Snickers",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.hTYGGQJOuACP2hMNCUaTcAHaDS&pid=Api&P=0&h=180",
       role: "FiveStar",
      description: 'Add to cart',
    },

    {
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.V_hKp9ZzO746uBPvuQk5EQHaHa&pid=Api&P=0&h=180",
      role: "MilkyBar",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.S6b5472Gkl8ihho2SGeQMQHaHa&pid=Api&P=0&h=180",
     
      role: "Gems",
      description: 'Add to cart',
    },

      {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.QTKqbiNbJMysVeGQYBQr7QHaHa&pid=Api&P=0&h=180",
         role: "Ferrero rocher ",
        description: 'Add to cart',
      },
  
      {
        imageUrl: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI438289.jpg?imgeng=w_1200",
        role: "Munch",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://tse2.mm.bing.net/th?id=OIP.uBrFd_VWZRgQcV1C9106QQHaE1&pid=Api&P=0&h=180",
       
        role: "Mars",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.-HfYMj6TCupYxtPwmr70sgHaFP&pid=Api&P=0&h=180",
         role: "Twix",
        description: 'Add to cart',
      },
  
      {
        imageUrl: "https://tse4.mm.bing.net/th?id=OIP.dk05swVfnQMWpas2mbw6sAHaEr&pid=Api&P=0&h=180",
        role: "Toblerone",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://www.biggerbolderbaking.com/wp-content/uploads/2015/12/IMG_0701.jpg",
       
        role: "HomeMade Chocolates",
        description: 'Add to cart',
      },
      
  ];

  return (
    
    <div class="fgt">
        <h1 style={{textAlign:"center",color:"white",fontSize:"50px"}}>CHOCOLATES</h1>
    <div className="card-list">
      {cards.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
    </div>
   
  );
};

export default ImageGallerycho;
