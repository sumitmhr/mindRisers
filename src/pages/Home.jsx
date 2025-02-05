import { ListWithAvatar } from '../components/ListWithAvatar';
import { useApi } from '../custom-hooks/apiHooks';

const Home = () => {

  const [load, data, err] = useApi('categories.php')



  if (load) {
    return <h1 className="text-center text-2xl font-bold mt-10">Loading.....</h1>;
  }

  if (err) {
    return <h1 className="text-center text-2xl font-bold text-red-500 mt-10">{err}</h1>;
  }



  return (
    <div className='p-4'>

      {data && <ListWithAvatar categories={data.categories} />}


    </div>
  )
}

export default Home;