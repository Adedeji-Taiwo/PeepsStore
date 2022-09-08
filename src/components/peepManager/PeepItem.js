import Modal from "./Modal";

function PeepItem({onClose, open, title, body}) {

  return (
    <Modal modalLabel='Peep Item' onClose={onClose} open={open}>
      <div className='peepItem'>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Modal>
  )
}

export default PeepItem;