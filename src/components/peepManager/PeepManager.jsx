import AddPeep from './AddPeeps';
import {useState} from 'react';
import { usePeepsQuery } from '../../services/peepApi';
import {useAddPeepMutation} from '../../services/peepApi';
import Pagination from '../pagination/Pagination';
import './peepManager.css';

function PeepManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const {data, error, isLoading, isSuccess} = usePeepsQuery();
    const [newData, setNewData] = useState(null);

    const [addPeep] = useAddPeepMutation()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleAddPeep = (e) => {
        e.preventDefault()
    
        const maxId = data.length > 0 
        ? Math.max(...data.map(n => n.id))
        : 0;
    
        const peep = {
         userId: 1,
         id: maxId + 1,
          title,
          body
        }
       setNewData(data.concat(peep))
       addPeep(peep)
        setOpenAddModal(false)
        setTitle('')
        setBody('');
      }

    
      //sort newData 
      const sortedNewData = newData && newData.sort(function (a, b) {
        if (a.id < b.id) return 1
        if (a.id > b.id) return -1
        return 0
      })

      

  return (
    <div className='peepManager' id='add'>
          <header>Peeps List</header>
        <div className="container">
      <div className='peepManager__container'>
        <button 
            className='main-btn btn-hover'
          onClick={() => setOpenAddModal(true)}>
          Add Peep +
        </button>
        <div className='peepManager__peeps' id='list'>
          <div className='isErrorIsLoading'>
            {error && <p>An error occurred</p>}
            {isLoading && <p>Loading...</p>}
          </div>
          {isSuccess && (
            <>
             {newData ? (
                <>
                <Pagination
                    data={sortedNewData}
                    pageLimit={5}
                    dataLimit={10}
                />
                </>
            ) : (
                <>
                    <Pagination
                    data={data}
                    pageLimit={5}
                    dataLimit={10}
                />
                </>
            )}
            </>
          )}
        </div>
      </div>
      {openAddModal &&
        <AddPeep onClose={() => setOpenAddModal(false)} open={openAddModal} data={data} handleAddPeep={handleAddPeep} title={title} setTitle={setTitle} body={body} setBody={setBody}/>
      }

    </div>
    </div>
  )
}

export default PeepManager;