let divs = [...document.querySelectorAll('.watch')];

let options = {
  rootMargin: '0px',
  threshold: .2
}

let setAnimations = (entries => {
  console.log(entries)
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('in view');
    }
  })
});

let observer = new IntersectionObserver(setAnimations, options);

divs.forEach((item, idx) => {
  observer.observe(item);
})
