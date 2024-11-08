
const CategoryCard = ({ name, imgSrc }) => {
  return (
    <div className='categoryCard'>
      <div className="categoryCardImg rounded-full w-[130px] h-[130px] mx-auto mt-4">
        <a href="">
          <img src={imgSrc} alt="unable" className='w-full h-full object-cover rounded-full' />
        </a>
      </div>
      <h2 className='text-center mt-2'><a href="" className='text-[#57586E] font-bold'>{name}</a></h2>
    </div>
  )
}

export default CategoryCard