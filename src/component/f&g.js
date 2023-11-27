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

const CardList = () => {
  const cards = [
    {
      imageUrl: "https://img.freepik.com/free-photo/wooden-board-full-juicy-slices-orange-fruit-stone-table_114579-40329.jpg?size=626&ext=jpg&ga=GA1.1.1896474171.1700991198&semt=sph",
       role: "Oranges",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://as1.ftcdn.net/v2/jpg/01/01/16/48/1000_F_101164814_u1JFsxI1xugtpfQQe150zBxKEtrcbJTL.jpg",
      role: "Kiwi",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://as1.ftcdn.net/v2/jpg/02/36/88/12/1000_F_236881295_odo9H1vtTZUvewumPdeRE4tHUtVa2UJg.jpg",
     
      role: "Apple",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/01/94/58/96/240_F_194589639_QrC7pzqnyPtzlSNydJT7QDrWWO0kd1dt.jpg",
       role: "Strawberry",
      description: 'Add to cart',
    },

    {
      imageUrl: "https://t3.ftcdn.net/jpg/02/65/13/60/240_F_265136000_BOxOgEZMRpaXPe8eyIAGWAHh4bvfmtUo.jpg",
      role: "Dragon Fruit",
      description: 'Add to cart',
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/01/96/99/90/240_F_196999091_AqreT719XAjzPqkfr1f04jCcHCsfIJdI.jpg",
     
      role: "Mango",
      description: 'Add to cart',
    },

      {
        imageUrl: "https://t3.ftcdn.net/jpg/02/15/78/44/240_F_215784483_BPQrfgtWwgTEQh6G0U3NocKwoCyuJ8BL.jpg",
         role: "Banana",
        description: 'Add to cart',
      },
  
      {
        imageUrl: "https://t4.ftcdn.net/jpg/03/01/98/69/240_F_301986993_SYvMrcYECPje0HK6qRQQcm6uC7d3tpVC.jpg",
        role: "Grapes",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://t4.ftcdn.net/jpg/01/33/02/55/240_F_133025567_GYRS1rRzIhn9eSVDB2qiSMYP8NUmrSKy.jpg",
       
        role: "Green Grapes",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://t3.ftcdn.net/jpg/00/84/83/52/240_F_84835234_p9SJKPzuvVVk7fyLG8lghNaswxYKM8H1.jpg",
         role: "Watermelon",
        description: 'Add to cart',
      },
  
      {
        imageUrl: "https://t3.ftcdn.net/jpg/03/12/06/56/240_F_312065659_U2VTxKl7eLCsIpxohSbPSXf4lAQh76LS.jpg",
        role: "JackFruit",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://t3.ftcdn.net/jpg/01/77/22/44/240_F_177224431_6S50Gr64wFWjkDHBGXq7PkaG5kcrgEgd.jpg",
       
        role: "Papaya",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://t4.ftcdn.net/jpg/00/40/36/49/240_F_40364956_poDftweCzHgPqP6atwAn2BZ40vTnbm1H.jpg",
         role: "Pineapple",
        description: 'Add to cart',
      },
  
      {
        imageUrl: "https://t3.ftcdn.net/jpg/00/26/76/50/240_F_26765053_pRDiXJPktT6uhzr2YjfqiVP3PTg8wEgc.jpg",
        role: "Pomegranate",
        description: 'Add to cart',
      },
      {
        imageUrl: "https://t4.ftcdn.net/jpg/01/75/44/17/240_F_175441734_eyqFu181ZC9qTIPGIgowN5FUrHfAnrUI.jpg",
       
        role: "Musk Melon",
        description: 'Add to cart',
      },
  ];

  return (
    
    <div class="fgt">
        <h1 style={{textAlign:"center",color:"white",fontSize:"50px"}}>FRUITS</h1>
    <div className="card-list">
      {cards.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
      
    </div>
    </div>
   
  );
};

export default CardList;
