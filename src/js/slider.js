const mySlider = new Splide('#mySlider', {
    perPage: 3,       
    perMove: 1,        
    gap: '60px',
    pagination: false,
    breakpoints: {
      768: { perPage: 2, gap: '20px', perMove: 1 },
      480: { perPage: 1, gap: '10px', perMove: 1 }
    }
  });
  
  mySlider.mount();