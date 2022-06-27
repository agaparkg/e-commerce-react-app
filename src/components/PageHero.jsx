function PageHero({ path }) {
  let pathName;

  switch (path) {
    case '/products':
      pathName = 'Products';
      break;
    case '/about':
      pathName = 'About';
      break;
    default:
      pathName = path;
      break;
  }
  return (
    <section className='page-hero'>
      <div className='section-center'>
        <h3 className='page-hero-title'>Home / {pathName}</h3>
      </div>
    </section>
  );
}

export default PageHero;
