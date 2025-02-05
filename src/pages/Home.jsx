import Error from '../components/Error';
import { ListWithAvatar } from '../components/ListWithAvatar';
import Loading from '../components/Loading';
import { useApi } from '../custom-hooks/apiHooks';

const Home = () => {

  const [load, data, err] = useApi('categories.php')



  if (load) {
    return <Loading />;
  }

  if (err) {
    return <Error />;
  }



  return (
    <div className='p-4'>

      {data && <ListWithAvatar categories={data.categories} />}


    </div>
  )
}

export default Home;