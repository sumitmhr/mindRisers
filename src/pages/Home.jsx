import { Button } from '@material-tailwind/react';
import React, { useRef } from 'react'

const Home = () => {

  const sec = useRef();
   
  const handleScroll = () => {
    sec.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='p-4'>

      <Button onClick={handleScroll} size='sm'>Scroll it</Button>

      <h1 className='text-2xl font-bold'>Section 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda officiis harum tenetur fugit, magnam et repudiandae repellendus provident laudantium cumque debitis tempore exercitationem eaque eos eveniet reiciendis numquam? Dolor, iste magni? Quod debitis nesciunt qui ipsa quibusdam eveniet magni perspiciatis, error illum eligendi doloremque officia molestiae incidunt eaque ipsum repellat repudiandae, doloribus in corrupti architecto voluptatum reiciendis. Ad cum maiores omnis ab eum architecto! Porro possimus, corrupti vel, magni provident nesciunt dicta voluptate perspiciatis iste iusto sed ad temporibus harum dolorum non, tempore itaque eveniet. Ducimus laborum aliquam consequuntur deserunt fugiat beatae, dignissimos minus? Ipsa nostrum ea tempora repellendus cupiditate aspernatur quos amet dolores fugiat. Saepe quia vitae recusandae illo illum quas voluptates nam, fugit, alias ipsum, atque fuga unde debitis doloremque? Culpa, vitae maiores. Repellat accusamus ratione aperiam, excepturi quisquam pariatur similique libero voluptatem quae saepe cupiditate. Eius veritatis qui officia ea quam esse vitae reiciendis laboriosam, illum labore et doloremque blanditiis nostrum animi, molestiae quidem repellat placeat, cupiditate aspernatur sunt. Voluptas corporis doloribus quas laudantium nostrum non impedit id perferendis, aliquam blanditiis odio mollitia odit aliquid distinctio culpa repellat itaque deleniti similique incidunt totam dolore explicabo aut facere quae! Facere fugit temporibus expedita, nihil incidunt animi numquam recusandae! Cum accusamus doloribus perspiciatis voluptas molestias, quisquam sed est dignissimos aliquid eligendi eum natus rem consectetur dolores repellat esse deserunt asperiores, ipsa nihil excepturi quis, nesciunt harum? Dolore voluptatibus possimus soluta aperiam facilis veniam odio, nisi quaerat illo, nesciunt ut sapiente pariatur porro perferendis laboriosam eum expedita dolorum obcaecati repellendus. Mollitia, dolore ut magni voluptate ad officia perspiciatis assumenda obcaecati in deserunt, libero officiis eum vitae molestias excepturi dolorem omnis. Voluptate doloremque minima itaque! Numquam, vitae, unde libero vel voluptatem repellendus pariatur fugiat incidunt nihil ducimus quaerat eaque praesentium illo placeat ea quisquam laboriosam, quod tenetur? Quod tempora culpa, fugiat sequi nobis magni, eius eos cumque cum aperiam voluptatum necessitatibus? Ipsam optio provident nobis quam ipsum rerum, eum voluptate laudantium quibusdam consequatur saepe ut laborum minus, necessitatibus tenetur, voluptas molestias illo architecto nisi ad eaque veritatis? Omnis, quod quia? Perferendis architecto aliquid soluta velit tempore animi quo ipsum neque ducimus delectus adipisci veritatis voluptatum reiciendis expedita omnis, deleniti molestias iure ullam ab inventore, pariatur magni. Maiores, itaque fugit! Commodi dicta qui, impedit eum nostrum, minima laboriosam nemo fuga ab quibusdam delectus magni quod laudantium iusto, tempora cupiditate atque repellendus doloremque accusamus quis. Tempore voluptas laudantium vel, ab fuga cum, odio totam fugiat eius quae culpa dolore! Aperiam in at deleniti placeat sunt dignissimos eligendi, cumque laudantium pariatur eaque neque eos. Cupiditate deleniti earum iure quos commodi ipsam in expedita qui numquam facere velit quisquam voluptatum alias fugiat, explicabo non tempora dolorum dolore id ut. Nam dignissimos dolores autem cum. Cumque reprehenderit labore natus sint! Ea distinctio deleniti assumenda tenetur maiores eius quidem numquam rem corporis dolore? Nemo, praesentium quod excepturi sit magni ipsa magnam odio id animi reprehenderit expedita quas eveniet esse, velit, laborum quis aliquid enim quisquam. Placeat asperiores deserunt iste maiores illum laudantium odit magni voluptas! Error!</p>


        <h1 ref={sec} className='text-2xl font-bold'>Section 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis, modi excepturi, non harum omnis a veniam tenetur distinctio obcaecati quis explicabo tempora nesciunt suscipit debitis aliquam! Animi, maiores ipsam.</p>
    </div>
  )
}

export default Home