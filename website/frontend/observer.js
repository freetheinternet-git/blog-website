
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('arrows-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.arrows'));