import React  from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'
import { Link } from "react-router-dom"

const venues = [
  {
    id: 1,
    name: "Birthdays",
    theme:"Celebratory Party",
    budget: "$299.99",
    image: "https://images.pexels.com/photos/7159864/pexels-photo-7159864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Costume Party",
    theme: "Themed Party",
    budget: "$339.99",
    image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Cocktail Party",
    theme: "Social Gathering",
    budget: "$509.99",
    image: "https://images-cdn.ubuy.co.in/65430f46d524f0261a443c48-wastime-customized-engraved-wooden.jpg",
  },
  {
    id: 4,
    name: "Summer Pool Party",
    theme: "Seasonal Party",
    budget: "$34.99",
    image: "https://images.pexels.com/photos/8657665/pexels-photo-8657665.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Neighborhood BBQ",
    theme: "Community Events",
    budget: "$29.99",
    image: "https://www.stallionbarware.com/cdn/shop/product",
  },
  {
    id: 6,
    name: "Awards Ceremony",
    theme: "Corporate Events",
    budget: "$49.99",
    image: "https://images.squarespace-cdn.com/content/v1/55dbcda6e4b038dd9b2bdc18/1589939500197-DM2197GOLHECTVSXC98Y/C6D093DE-A260-4165-954D-B56394FB8F1C?format=1000w",
  },
  {
    id: 7,
    name: "Diwali Party",
    theme: "Cultural Celebration",
    budget: "$24.99",
    image: "https://pinkpositiveshop.com/cdn/shop/products/personalised-rose-gold-apron-cooking-baking-gift-apron-516844_800x.jpg?v=1667768354",
  },
  
];

const UserMembership = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 text-purple-800"> Our Events </h1>
      <div className="overflow-y-auto h-96">
        <div className="grid grid-cols-3 gap-8">
          {venues.map((venues) => (
            <div key={venues.id} className="border p-4 bg-white shadow-lg rounded-lg">
              <Link to="#" className="block">
                <img src={venues.image} alt={venues.name} className="w-full mb-4 rounded-md" />
              </Link>
              <p className="text-2xl font-bold text-gray-800">{venues.name}</p>
              <p className="text-xl mb-2 text-gray-800">{venues.theme}</p>
              <p className="text-lg font-bold text-purple-700">{venues.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default UserMembership;