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
            src={`http://192.168.1.71:8000/${category.image}`}
            className='mx-auto categoryCardImg rounded-full w-[130px] h-[130px]'
            alt={category.name}
          />
        </div>
      </Link>
      <h2 className='text-center mt-2'><a href="" className='text-[#57586E] font-bold'>{category.name}</a></h2>
    </div>
  )
}

export default CategoryCard