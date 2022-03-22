const menuapi = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "5.0",
    category: "Starters",
    vote: "(87)",
    title: "Veg Mixer",
    content: "Tomato Salad & Carrot",
    price: "$5.99",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.8",
    category: "Starters",
    vote: "(32)",
    title: "Macroni",
    content: "Cheese Pizza",
    price: "$2.99",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.9",
    category: "Starters",
    vote: "(89)",
    title: "Nelli",
    content: "Hamburger & Fries",
    price: "$7.99",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Starters",
    vote: "(12)",
    title: "Jalpeno Poppers",
    content: "Crispy Poppers",
    price: "$8.99",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Starters",
    vote: "(19)",
    title: "Cajun Chicken",
    content: "Roasted Chicken & Egg",
    price: "$7.99",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "5.0",
    category: "Starters",
    vote: "(61)",
    title: "Chillie Cake",
    content: "Deepfried Chicken",
    price: "$2.99",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Starters",
    vote: "(95)",
    title: "Guacamole Mex",
    content: "Mexican Chill",
    price: "$3.99",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "3.9",
    category: "Starters",
    vote: "(26)",
    title: "Carnet Nachos",
    content: "Chill Crispy Nahos",
    price: "$3.99",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Main",
    vote: "(87)",
    title: "Guacamole Mex",
    content: "Mexican Chilli",
    price: "$3.99",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.8",
    category: "Main",
    vote: "(32)",
    title: "Cajun Chicken",
    content: "Roasted Chicken & Egg",
    price: "$7.99",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.9",
    category: "Main",
    vote: "(89)",
    title: "Chicken Chilled",
    content: "Chicken Main Course",
    price: "$5.99",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Main",
    vote: "(12)",
    title: "Samsa Beef",
    content: "Fried Mexican Beef",
    price: "$3.99",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Main",
    vote: "(19)",
    title: "Nelli",
    content: "Hamburger & Fries",
    price: "$7.99",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "3.9",
    category: "Main",
    vote: "(26)",
    title: "Carnet Nachos",
    content: "Chill Crispy Nahos",
    price: "$3.99",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "5.0",
    category: "Main",
    vote: "(61)",
    title: "Chillie Cake",
    content: "Deepfried Chicken",
    price: "$2.99",
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Main",
    vote: "(95)",
    title: "Guacamole Mex",
    content: "Mexican Chill",
    price: "$3.99",
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Soup",
    vote: "(12)",
    title: "Jalpeno Poppers",
    content: "Crispy Poppers",
    price: "$8.99",
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Soup",
    vote: "(12)",
    title: "Samsa Beef",
    content: "Fried Mexican Beef",
    price: "$3.99",
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "3.9",
    category: "Soup",
    vote: "(26)",
    title: "Carnet Nachos",
    content: "Chill Crispy Nahos",
    price: "$3.99",
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Soup",
    vote: "(12)",
    title: "",
    content: "Deepfried Chicken",
    price: "$8.99",
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Soup",
    vote: "(19)",
    title: "Cajun Chicken",
    content: "Roasted Chicken & Egg",
    price: "$7.99",
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.9",
    category: "Soup",
    vote: "(89)",
    title: "Chicken Chilled",
    content: "Chicken Main Course",
    price: "$5.99",
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Soup",
    vote: "(95)",
    title: "Guacamole Mex",
    content: "Mexican Chill",
    price: "$3.99",
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Soup",
    vote: "(19)",
    title: "Nelli",
    content: "Hamburger & Fries",
    price: "$7.99"
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Desserts",
    vote: "(87)",
    title: "Guacamole Mex",
    content: "Mexican Chilli",
    price: "$3.99",
  },
  {
    id: 26,
    url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.8",
    category: "Desserts",
    vote: "(32)",
    title: "Jalapeno Poppers",
    content: "Crispy Soyabeans",
    price: "$8.99",
  },
  {
    id: 27,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.9",
    category: "Desserts",
    vote: "(89)",
    title: "Chicken Chilled",
    content: "Chicken Main Course",
    price: "$5.99",
  },
  {
    id: 28,
    url: "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.6",
    category: "Desserts",
    vote: "(12)",
    title: "Samsa Beef",
    content: "Fried Mexican Beef",
    price: "$3.99",
  },
  {
    id: 29,
    url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Desserts",
    vote: "(19)",
    title: "Nelli",
    content: "Hamburger & Fries",
    price: "$7.99",
  },
  {
    id: 30,
    url: "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "5.0",
    category: "Desserts",
    vote: "(61)",
    title: "Carnet Nachos",
    content: "Chill Crispy Nahos",
    price: "$3.99",
  },
  {
    id: 31,
    url: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "4.2",
    category: "Desserts",
    vote: "(95)",
    title: "Chillie Cake",
    content: "Deepfried Chicken",
    price: "$2.99",
  },
  {
    id: 32,
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    rating: "3.9",
    category: "Desserts",
    vote: "(26)",
    title: "Cajun Chicken",
    content: "Roasted Chicken & Egg",
    price: "$7.99",
  },
];

export default menuapi;