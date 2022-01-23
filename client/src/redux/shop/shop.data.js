const SHOP_DATA = {
  mens: {
    id: 1,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'RB3598',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB3598.png',
        price: 8290,
      },
      {
        id: 2,
        name: 'RB3334',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB3334.png',
        price: 5590,
      },
      {
        id: 3,
        name: 'RB3129',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB3129.png',
        price: 6590,
      },
      {
        id: 4,
        name: 'Scuderia Ferrari',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB-4297-Scuderia-Ferrari.png',
        price: 10890,
      },
      {
        id: 5,
        name: 'Aviator Titanium',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Aviator-Titanium.png',
        price: 30090,
      },
      {
        id: 6,
        name: 'Frank Titanium',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Frank-titanium.png',
        price: 25490,
      },
      {
        id: 7,
        name: 'Aviator Total Black',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Aviator-Total-Black.png',
        price: 5670,
      },
      {
        id: 8,
        name: 'RB2180',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB2180.png',
        price: 8890,
      },
      {
        id: 9,
        name: 'RB9978',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB-4125-Scuderia-Ferrari.png',
        price: 5890,
      },
    ],
  },
  women: {
    id: 2,
    title: 'Women',
    routeName: 'women',
    items: [
      {
        id: 10,
        name: 'Mr Burbank',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Mr-Burbank.png',
        price: 10190,
      },
      {
        id: 11,
        name: 'Lady Burbank',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Lady-Burbank.png',
        price: 10190,
      },
      {
        id: 12,
        name: 'State Street',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/State-Street.png',
        price: 10150,
      },
      {
        id: 13,
        name: 'Jack',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Jack.png',
        price: 10900,
      },
      {
        id: 14,
        name: 'Orion',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Orion.png',
        price: 9840,
      },
      {
        id: 15,
        name: 'Inverness',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Inverness.png',
        price: 10190,
      },
      {
        id: 16,
        name: 'New Wayfarer',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/New-Wayfarer.png',
        price: 9540,
      },
      {
        id: 17,
        name: 'Hexagonal',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Hexagonal.png',
        price: 9590,
      },
    ],
  },
  kids: {
    id: 3,
    title: 'Kids',
    routeName: 'kids',
    items: [
      {
        id: 18,
        name: 'Vincent Chase',
        imageUrl:
          'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11056-c2-eyeglasses_g_8367.jpg',
        price: 999,
      },
      {
        id: 19,
        name: 'Navy Blue',
        imageUrl:
          'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10954-c1-eyeglasses_vincent-chase-vc-e10954-c1-eyeglasses_eyeglasses_m_0011_1.jpg',
        price: 999,
      },
      {
        id: 20,
        name: 'Full Rim Yellow',
        imageUrl:
          'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s11936-c2-full-rim-sunglasses_sunglasses_g_9860_1_1.jpg',
        price: 2000,
      },
      {
        id: 21,
        name: 'Brown Skull',
        imageUrl:
          'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s11939-c2-full-rim-sunglasses_sunglasses_untitled-2.jpg',
        price: 999,
      },
      {
        id: 22,
        name: 'Matt Black',
        imageUrl:
          'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//h/o/hooper-hp-e10001m-c1-eyeglasses_G_4339.jpg',
        price: 1999,
      },
    ],
  },
  sunglasses: {
    id: 4,
    title: 'Sunglasses',
    routeName: 'sunglasses',
    items: [
      {
        id: 23,
        name: 'Justin',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Justin.png',
        price: 8190,
      },
      {
        id: 24,
        name: 'Erika',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Erika.png',
        price: 7590,
      },
      {
        id: 25,
        name: 'Chris',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Chris.png',
        price: 8190,
      },
      {
        id: 26,
        name: 'RB2180',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB2180.png',
        price: 8890,
      },
      {
        id: 27,
        name: 'Aviator Titanium',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Aviator-Titanium.png',
        price: 30090,
      },
      {
        id: 28,
        name: 'Round Evolve',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/Round-Evolve.png',
        price: 11590,
      },
      {
        id: 29,
        name: 'RB 3689 Evolve',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Product_images/RB-3689-Evolve.png',
        price: 11590,
      },
    ],
  },
  eyeglasses: {
    id: 5,
    title: 'Eyeglasses',
    routeName: 'eyeglasses',
    items: [
      {
        id: 30,
        name: 'Aviator Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX6489250058.png',
        price: 7590,
      },
      {
        id: 31,
        name: 'Wayfarer Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX5184810652.png',
        price: 8090,
      },
      {
        id: 32,
        name: 'Nomad Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX5487201254.png',
        price: 7590,
      },
      {
        id: 33,
        name: 'Jack Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX6465250949.png',
        price: 7590,
      },
      {
        id: 34,
        name: 'Hexagonal Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX6448310551.png',
        price: 7590,
      },
      {
        id: 35,
        name: 'Thalia Optics',
        imageUrl:
          'https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/0RX5395200051.png',
        price: 7590,
      },
    ],
  },
};

export default SHOP_DATA;
