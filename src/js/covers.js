export default function initCoversAnimation() {
  const coversImages = document.querySelectorAll('.covers-image');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          entry.target.classList.remove('hidden');

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  coversImages.forEach(image => {
    observer.observe(image);
  });
}
