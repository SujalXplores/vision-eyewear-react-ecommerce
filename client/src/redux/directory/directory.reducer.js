const INITIAL_STATE = {
  sections: [
    {
      title: 'mens',
      imageUrl:
        'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Sunglasses-Men.jpg',
      id: 1,
      linkUrl: 'shop/category/mens',
    },
    {
      title: 'women',
      imageUrl:
        'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Sunglasses-Women.jpg',
      id: 2,
      linkUrl: 'shop/category/women',
    },
    {
      title: 'kids',
      imageUrl:
        'https://india.ray-ban.com/pub/media/wysiwyg/Rb_Gift_guide_page/Sunglasses-Kids.jpg',
      id: 3,
      linkUrl: 'shop/category/kids',
    },
    {
      title: 'sunglasses',
      imageUrl:
        'https://india.ray-ban.com/pub/media/wysiwyg/Rb_home_opti/34-Sunglasses-Homepage-Banner-Desktop.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/category/sunglasses',
    },
    {
      title: 'eyeglasses',
      imageUrl:
        'https://india.ray-ban.com/pub/media/wysiwyg/Rb_home_opti/36-Eyeglasses-Homepage-Banner-Desktop.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/category/eyeglasses',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
