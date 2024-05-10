export const intersect = function () {
  let sticky = document.querySelectorAll('.top-bar-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sticky');
      } else {
      }
    });
  });

  sticky.forEach((el: any) => observer.observe(el));
};
