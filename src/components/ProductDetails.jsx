import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../utils/utils';
import PageHero from './PageHero';

const ProductDetails = () => {
  let { id } = useParams();
  const products = useSelector((store) => store.productsState.products);
  const product = products.find((p) => p.id === id);

  const { name, price, company, colors, image } = product.fields;
  const imgUrl = image[0].thumbnails.large.url;
  return (
    <>
      <PageHero path={name} />
      {/* product info */}
      <section className='single-product'>
        <div className='section-center single-product-center'>
          <img src={imgUrl} className='single-product-img img' alt='' />
          <article className='single-product-info'>
            <div>
              <h2 className='single-product-title'>{name}</h2>
              <p className='single-product-company text-slanted'>
                by {company}
              </p>
              <p className='single-product-price'>{formatPrice(price)}</p>
              <div className='single-product-colors'>
                {colors.map((c) => {
                  return (
                    <span
                      className='product-color'
                      style={{ backgroundColor: `${c}` }}
                    ></span>
                  );
                })}
              </div>
              <p className='single-product-desc'>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <button className='addToCartBtn btn' data-id='id'>
                add to cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;