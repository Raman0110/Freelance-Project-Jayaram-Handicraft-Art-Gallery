import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <div className='categoryCard'>
      <div className="categoryCardImg rounded-full w-[130px] h-[130px] mx-auto mt-4">
        <Link to={`/category/${category.slug}`}>
          <img src={`http://localhost:8000/${category.image}`} alt="unable" className='w-full h-full object-cover rounded-full' loading="lazy" />
        </Link>
      </div>
      <h2 className='text-center mt-2'><a href="" className='text-[#57586E] font-bold'>{category.name}</a></h2>
    </div>
  )
}

export default CategoryCard