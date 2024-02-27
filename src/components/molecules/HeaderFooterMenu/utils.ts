export const toAnchor = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const hash = event.currentTarget.hash;
  const element = document.querySelector(hash);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
