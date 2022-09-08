import Modal from "./Modal";


function AddPeep({onClose, open, handleAddPeep, body, setBody, title, setTitle}) {
 
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