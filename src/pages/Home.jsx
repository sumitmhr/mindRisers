import Error from '../components/Error';
import { ListWithAvatar } from '../components/ListWithAvatar';
import Loading from '../components/Loading';
import { useApi } from '../custom-hooks/apiHooks';
import { useSelector } from 'react-redux'
import { BlogCard } from '../components/BlogCard';

const Home = () => {

  const { blogs } = useSelector((state) => state.blogSlice);

  const [load, data, err] = useApi('categories.php')



  if (load) {
    return <Loading />;
  }

  if (err) {
    return <Error />;
  }



  return (
    <div className='p-4 grid grid-cols-3 gap-5'>

      {blogs.length === 0 && <h1 className='text-2xl text-center col-span-3 mt-7'>List is empty ! Try to add new blog</h1>}

      {blogs.map((blog, index) => {
        return <BlogCard key={blog.id} blog={blog} i = {index} />;
      })}

      {/* {data && <ListWithAvatar categories={data.categories} />} */}


    </div>
  )
}

export default Home;