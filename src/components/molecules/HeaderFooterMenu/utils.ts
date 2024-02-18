export const toAnchor = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const id = href?.substring(href.indexOf('#')) ?? '';

  if (id.startsWith('#') && id.length > 1) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
