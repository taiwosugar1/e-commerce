const Categories = [
    {
      id: 1,
      title: "Mens Nike Shoe",
      price: 213,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men"
    },
    {
      id: 2,
      title: "Women Nike Shoe",
      price: 113,
      image: 'https://w7.pngwing.com/pngs/859/576/png-transparent-nike-free-sneakers-shoe-running-shoes-for-women-cartoon-white-outdoor-shoe-converse-thumbnail.png',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id: 3,
      title: "Children Black Shirt",
      price: 103,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 4,
      title: "Mens White Nike Shoe",
      price: 150,
      image: 'https://w7.pngwing.com/pngs/855/327/png-transparent-sneakers-shoe-vans-nike-women-s-sports-shoes-purple-blue-white-thumbnail.png',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:["men"] 
    },
    {
      id: 5,
      title: "Women White Shirt",
      price: 100,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id: 6,
      title: "Children White Shirt",
      price: 90,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    // Existing products above
    
    // Additional 10 products below
    {
      id: 7,
      title: "Mens Black Shoes",
      price: 250,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men"
    },
    {
      id: 8,
      title: "Women Black Shoes",
      price: 180,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id:  9,
      title: "Children Black Shoes",
      price: 120,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 10,
      title: "Mens Black Shirt",
      price: 213,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "black"
    },
    {
      id: 11,
      title: "Women Black Shirt",
      price: 113,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: ["women"]
    },
    {
      id: 12,
      title: "Children Black Shirt",
      price: 103,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 13,
      title: "Mens White Shirt",
      price: 150,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men"
    },
    {
      id: 14,
      title: "Women White Shirt",
      price: 100,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id: 15,
      title: "Children White Shirt",
      price: 90,
      image: '../images/men-cloth.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:  ["children", "white"]
    },
    
    {
      id: 16,
      title: "Mens Black Shoes",
      price: 250,
      image: '../Assets/product16.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:  ["men", "white"]
    },
    {
      id: 17,
      title: "Women Black Shoes",
      price: 180,
      image: '../Assets/product17.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "black"
    },
    {
      id: 18,
      title: "Children Black Shoes",
      price: 120,
      image: '../Assets/product18.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    { 
      id: 19,
      title: "Mens Black Shirt",
      price: 213,
      image: 'https://images.pexels.com/photos/6481918/pexels-photo-6481918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men"
    },
    {
      id: 20,
      title: "Women Black Shirt",
      price: 113,
      image: '../Assets/product2.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id: 21,
      title: "Children Black Shirt",
      price: 103,
      image: '../Assets/product3.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 22,
      title: "Mens White Shirt",
      price: 150,
      image: '../Assets/product4.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "red"
    },
    {
      id: 23,
      title: "Women White Shirt",
      price: 100,
      image: '../Assets/product5.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: ["women","white"]
    },
    {
      id: 24,
      title: "Children White Shirt",
      price: 90,
      image: '../Assets/product6.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "white"
    },
    // Existing products above
    
    // Additional 10 products below
    {
      id: 25,
      title: "Mens Black Shoes",
      price: 250,
      image: '../Assets/product16.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men"
    },
    {
      id: 26,
      title: "Women Black Shoes",
      price: 180,
      image: '../Assets/product17.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "women"
    },
    {
      id:  27,
      title: "Children Black Shoes",
      price: 120,
      image: '../Assets/product18.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 28,
      title: "women shoe",
      price: 213,
      image: '../images/women-shoe.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 29,
      title: "Women shoe",
      price: 113,
      image: '../images/women-shoe2.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 30,
      title: "Men's shoe",
      price: 103,
      image: '../images/men-shoe7.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 31,
      title: "women's shoe",
      price: 150,
      image: '../images/women-shoe1.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 32,
      title: "men's shoe",
      price: 100,
      image: '../images/men-shoe5.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 33,
      title: "Men's shoe",
      price: 90,
      image: '../images/men-shoe4.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:  "shoes"
    },
    
    {
      id: 34,
      title: "Mens Black Shoes",
      price: 250,
      image: '../images/men-shoe3.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:  "shoes"
    },
    {
      id: 444,
      title: "Mens Black Shoes",
      price: 50,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category:  "shoes"
    },
    {
      id: 35,
      title: "Watch for fassion",
      price: 180,
      image: '../images/watch4.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "watches"
    },
    {
      id: 36,
      title: "Children Black Shoes",
      price: 120,
      image: '../Assets/product18.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "children"
    },
    {
      id: 37,
      title: "quality watch",
      price: 120,
      image: '../images/watch3.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "watches"
    },
    {
      id: 38,
      title: "Diamond watch",
      price: 120,
      image: '../images/watch2.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "watches"
    },
    {
      id: 39,
      title: "A quality watch",
      price: 120,
      image: '../images/watch1.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "watches"
    },
    {
      id: 40,
      title: "men's shoe",
      price: 120,
      image: '../images/men-shoe2.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
    {
      id: 41,
      title: " Men's shoe",
      price: 120,
      image: '../images/men-shoe1.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "shoes"
    },
  
    // shoebody variation (for Men shoes)...
    {
      id: 42,
      title: "Mens Black Shirt",
      price: 213,
      image: 'https://media.istockphoto.com/id/1391533360/photo/red-sneakers-shoes.jpg?s=612x612&w=0&k=20&c=FkMZ0ys9M6bpUIRmcwbVsd49F4D6cOvSw8XlokskU48=',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men1"
    },
    {
      id: 423,
      title: "Mens Black Shirt",
      price: 112,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7H_15n0KOit04rq1lvMrla8DgSzoaprxpF0b6guY3VuxcWLNDyZA5ZHwnLIiQ3aHkcc&usqp=CAU',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men2"
    },
    {
      id: 424,
      title: "Mens Black Shirt",
      price: 112,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsnLOM6_cp26CSda782E75847TWygd8ujKe5bw8_PEATKfSfzTbQ0WoxKD5dOIDyzO0c&usqp=CAU',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men3"
    },
    {
      id: 425,
      title: "Mens Black Shirt",
      price: 138,
      image: 'https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men4"
    },
    {
      id: 426,
      title: "Mens Black Shirt",
      price: 112,
      image: 'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men5"
    },
    {
      id: 427,
      title: "Mens Black Shirt",
      price: 165,
      image: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men6"
    },
    {
      id: 428,
      title: "Mens Black Shirt",
      price: 115,
      image: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men7"
    },
    
    
    // shoe colors variation (for Men shoes)...
    {
      id: 429,
      title: "Men  Nike shoe",
      price: 213,
      image: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-white"
    },
    {
      id: 49,
      title: "Mens Black Shirt",
      price: 112,
      image: 'https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-grey"
    },
    {
      id: 430,
      title: "Men shoe",
      price: 112,
      image: 'https://i.pinimg.com/736x/cd/16/fb/cd16fb7bde7c4086f2978e4396a4fd16.jpg',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-orange"
    },
    {
      id: 440,
      title: "Mens shoe",
      price: 138,
      image: 'https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-yellow"
    },
    {
      id: 441,
      title: "Men shoe",
      price: 112,
      image: 'https://lh3.googleusercontent.com/proxy/uC_i1eO5LE4si6L5QSuy4oCVukuH7idkJoEyo-hglpTXtTR-QftM5yZXCpL5DCeQwsgVnrjsDL3W0OKlYVnurvJ23aD8PGn94HtiNT07DYehsnAXHZwPHA',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-blue"
    },
    {
      id: 442,
      title: "Mens Black Shirt",
      price: 165,
      image: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-red"
    },
    {
      id: 443,
      title: "Mens Black Shirt",
      price: 115,
      image: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      category: "men-green"
    },
    
    
    
  ];
  
  export default Categories;