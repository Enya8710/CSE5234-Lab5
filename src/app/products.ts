export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    img_src: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Aoenium',
      price: 7.99,
      description:
      'Aeoniums are most commonly known for their striking rosettes made up of dense, glossy, waxy leaves growing out of a single stem.',
      quantity: 0,
      img_src: "assets/imgs/aeonium.jpg"
      
    },
    {
      id: 2,
      name: 'Kalanchoe',
      price: 6.99,
      description:
        'Kalanchoe is a beautiful flowering plant that is both easy and rewarding to grow indoors or outdoors.',
      quantity: 0,
      img_src: "assets/imgs/kalanchoe.jpg"
    },
    {
      id: 3,
      name: 'Senecio',
      price: 2.99,
      description: 'Senecio is a genus of flowering plants that contains more than 1000 species of groundsels, ragworts, and dusty miller.',
      quantity: 0,
      img_src: "assets/imgs/senecio.jpg"
    },
    {
      id: 4,
      name: 'Sempervivum',
      price: 6.35,
      description: 'Sempervivum is a genus of about 40 species of flowering plants that are commonly known as Houseleeks or Hen and Chicks.',
      quantity: 0,
      img_src: "assets/imgs/sempervivum.jpg"
    },
    {
      id: 5,
      name: 'Crassula',
      price: 7.49,
      description: 'Crassula is a genus of succulent plants that includes more than 350 species native to many different parts of the world.',
      quantity: 0,
      img_src: "assets/imgs/crassula.jpg"
    },
  ];
  
  