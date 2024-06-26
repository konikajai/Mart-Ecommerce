import React from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/ProductAction/ProductAction';

import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

import productImg01 from "../assets/double-sofa-01.png";
import productImg02 from "../assets/double-sofa-02.png";
import productImg08 from "../assets/arm-chair-02.jpg";
import productImg09 from "../assets/arm-chair-03.jpg";
import phone03 from "../assets/phone-03.png";
import phone04 from "../assets/phone-04.jpg";

import phone01 from "../assets/phone-01.jpg";
import phone02 from "../assets/phone-02.jpg";
import phone05 from "../assets/phone-05.jpg";
import phone06 from "../assets/phone-06.jpg";
import wireless01 from "../assets/wireless-01.png";
import wireless02 from "../assets/wireless-02.png";
import wireless03 from "../assets/wireless-03.png";
import wireless04 from "../assets/wireless-04.png";

import productImg03 from "../assets/double-sofa-03.png";
import productImg04 from "../assets/single-sofa-01.jpg";
import productImg05 from "../assets/single-sofa-02.jpg";
import productImg06 from "../assets/single-sofa-03.jpg";
import productImg007 from "../assets/single-sofa-04.png";

const sales =[
    {
        id: "01",
        productName: "Stone and Beam Westview ",
        imgUrl: productImg01,
        category: "sofa",
        price: 193,
        discount:30,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.5,
      },
      {
        id: "02",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        discount:20,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "03",
        productName: "Amazon Brand Modern Sofa",
        imgUrl: productImg03,
        category: "sofa",
        price: 173,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "26",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "04",
        productName: "Fllufy Sheep Sofa",
        imgUrl: productImg04,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
    
      {
        id: "05",
        productName: "Faux Velvet Sofa",
        imgUrl: productImg05,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
    
      {
        id: "06",
        productName: "Fllufy Sheep Sofa",
        imgUrl: productImg06,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "27",
        productName: "Modern Arm Sofa",
        imgUrl: productImg007,
        category: "sofa",
        price: 173,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
]
const discountProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

]
const newArrivals =[
  {
      id: "10",
      productName: "Apple iPhone 12 Pro",
      imgUrl: phone01,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "11",
      productName: "Apple iPhone 12 Max",
      imgUrl: phone02,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "12",
      productName: "Realme 8",
      imgUrl: phone03,
      category: "mobile",
      price: 599,
      discount:10,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "13",
      productName: "One Plus Nord",
      imgUrl: phone04,
      category: "mobile",
      price: 799,
      discount:5,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "14",
      productName: "Apple iPhone 13 Pro",
      imgUrl: phone05,
      category: "mobile",
      price: 899,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "15",
      productName: "Samsung Galaxy S22",
      imgUrl: phone06,
      category: "mobile",
      price: 699,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "20",
      productName: "Beat Studio Wireless",
      imgUrl: wireless01,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "21",
      productName: "Beat EP Headphones",
      imgUrl: wireless03,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "22",
      productName: "Black Headphones",
      imgUrl: wireless02,
      category: "wireless",
      price: 169,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "23",
      productName: "Bluetooth Headphones",
      imgUrl: wireless04,
      category: "wireless",
      price: 139,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
]

function DisplayProducts() {
  const { id } = useParams();
  console.log("id" + id)
  console.log(discountProducts)
  console.log(newArrivals);


  // const product = discountProducts.filter(product => product.id === id);
  // const product = (newArrivals && discountProducts).find(data => data.id === id);
  // const Similarproduct = discountProducts.filter(product => product.id != id);

  const allProducts = [...discountProducts, ...newArrivals, ...sales];
  const product = allProducts.find((data) => data.id === id);
  
  console.log(product)

  const dispatch=useDispatch();
  return (

    <>
      <Banner />
      <div>
        <div>
          {
            product ? (
              <div className="card">
                <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.shortDesc}</p>
                </div>
                <div className="card-body">
                  <h5 className="card-link">Discount: {product.discount}%</h5>
                  <h5 className="card-link">Price: ${product.price}</h5>
                </div>
              </div>
            ) : (<div>no product</div>)
          }
          <button type="button" class="btn btn-primary" onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>
        </div>
        <h2>Description</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ratione asperiores deserunt, dolore, aliquid voluptatem doloribus provident rem quos, reprehenderit voluptatibus facere veniam tempore repellendus nostrum quae corporis repellat necessitatibus.</p>
      </div>
      <h3>You Might Also Like</h3>
      <Footer />
    </>
  )
}

export default DisplayProducts;