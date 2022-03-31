var catalog = [ // faking the data - fake server
  {
    _id: "emroone",
    title: "Sticker",
    price: 12.50,
    stock: 15,
    category: "Merch",
    image:"avst1.jpg",
    discount: 5,
  },
  {
    _id: "emrosix",
    title: "Sticker",
    price: 12.50,
    stock: 15,
    category: "Merch",
    image:"avst2.jpg",
    discount: 5,
  },
  {
    _id: "emrothree",
    title: "T-Shirt",
    price: 20.00,
    stock: 15,
    category: "Clothing",
    image:"avts1.jpg",
    discount: 5,
  },
  {
    _id: "emroeight",
    title: "T-Shirt",
    price: 20.00,
    stock: 15,
    category: "Clothing",
    image:"avts2.jpg",
    discount: 5,
  },
  {
    _id: "emrotwo",
    title: "Print",
    price: 25.,
    stock: 15,
    category: "Merch",
    image:"avpt1.jpg",
    discount: 5,
  },
  {
    _id: "emroseven",
    title: "Print",
    price: 25.,
    stock: 15,
    category: "Merch",
    image:"avpt2.jpg",
    discount: 5,
  },
  {
    _id: "emrofour",
    title: "Hoodie",
    price: 30.00,
    stock: 15,
    category: "Clothing",
    image:"avhd1.jpg",
    discount: 5,
  },
  {
    _id: "emronine",
    title: "Hoodie",
    price: 30.00,
    stock: 15,
    category: "Clothing",
    image:"avhd2.jpg",
    discount: 5,
  },
  {
    _id: "emrofive",
    title: "Original",
    price: 250.00,
    stock: 15,
    category: "Artwork",
    image:"avor1.jpg",
    discount: 5,
  },
  {
    _id: "emroten",
    title: "Original",
    price: 250.00,
    stock: 15,
    category: "Artwork",
    image:"avor2.jpg",
    discount: 5,
  }
];


class DataService{
  getCatalog(){
    // This method should retrieve data from the server
    // Save the.. var catalog = request();
    return catalog;
  }

  saveProduct(prod) {
    console.log("Sending prod to server,,,,,,,,NOT")
  }

  saveCouponCode(code) {
    console.log("Sending cc to server,,,,,,,,NOT")
  }

}

export default DataService;
