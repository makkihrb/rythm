import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = () => {
  // Define the cards with specific categories
  const cards = [
    {
      category: "Men's Clothing",
      imageSrc: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700',
      discount: '-50%',
    },
    {
      category: "Women's Clothing",
      imageSrc: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700',
      discount: null,
    },
    {
      category: 'Jewelery',
      imageSrc: 'https://source.unsplash.com/y2ErhoE92KA?auto=format&q=75&fit=crop&crop=top&w=600&h=700', 
      discount: '-25%',
    },
    {
      category: 'Electronics',
      imageSrc: 'https://source.unsplash.com/l-EssfCmQ_s?auto=format&q=75&fit=crop&crop=top&w=600&h=700', 
      discount: null,
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR CATEGORIES</h1>
      </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div key={index}>
              <a href={`/categories/${card.category.toLowerCase()}`} className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <img
                  src={card.imageSrc}
                  loading="lazy"
                  alt={card.category}
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                {card.discount && (
                  <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    {card.discount}
                  </span>
                )}
              </a>
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <Link
                    to={`/categories/${card.category.toLowerCase()}`}
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    {card.category}
                  </Link>
                </div>
                <div className="flex flex-col items-end">
                  {card.discount && (
                    <span className="text-s text-red-500 ">Discount</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
