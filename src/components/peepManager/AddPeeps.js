import Modal from "./Modal";
import {useState} from 'react'
import {useAddPeepMutation} from '../../services/peepApi';

function AddPeep({onClose, open, data}) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [addPeep] = useAddPeepMutation()

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
    addPeep(peep)
    data.concat(peep)
    onClose()
   
    console.log(data.concat(peep))
  }

  return (
    <Modal modalLabel='Add peep' onClose={onClose} open={open}>
      <form className='addPeep' name='addPeep' onSubmit={handleAddPeep}>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setBody(e.target.value)}
          placeholder='Enter peep description'
          value={body}></textarea>
        <button className='main-btn btn-hover' type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddPeep;