import AddPeep from './AddPeeps';
import {useState} from 'react';
import { usePeepsQuery } from '../../services/peepApi';
import Pagination from '../pagination/Pagination';
import './peepManager.css';

function PeepManager() {

  const [openAddModal, setOpenAddModal] = useState(false);
  const {data, error, isLoading, isSuccess} = usePeepsQuery();


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
             {data.length > 0 ? (
                <>
                <Pagination
                    data={data}
                    pageLimit={5}
                    dataLimit={10}
                />
                </>
            ) : (
            <h1>No Peeps to display</h1>
            )}
            </>
          )}
        </div>
      </div>
      {openAddModal &&
        <AddPeep onClose={() => setOpenAddModal(false)} open={openAddModal} data={data}/>
      }

    </div>
    </div>
  )
}

export default PeepManager;