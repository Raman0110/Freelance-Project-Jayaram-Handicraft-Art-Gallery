import { Link } from "react-router-dom";
import { LazyImageRenderer } from 'lazy-image-renderer';


const CategoryCard = ({ category }) => {
  return (
    <div className='categoryCard'>
      <Link to={`/category/${category.slug}`}>
        <div className="mt-4 text-center">
          <LazyImageRenderer
            effect='opacity'
            effectDuration={0.1}
            objectFit='cover'
            src={`${import.meta.env.VITE_host}/${category.image}`}
            className='mx-auto categoryCardImg rounded-full w-[130px] h-[130px]'
            alt={category.name}
          />
        </div>
      </Link>
      <h2 className='text-center mt-2'><Link to={`/category/${category.slug}`}>{category.name}</Link></h2>
    </div>
  )
}

export default CategoryCard