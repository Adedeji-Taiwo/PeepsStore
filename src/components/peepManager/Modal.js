function Modal({open, modalLabel, children, onClose}) {

    const handleClose = (e) => {
      if(e.target.className === 'modalContainer'){
        onClose()
      }
      return null
    }
  
    if(open) {
      return (
        <div className='modalContainer' onClick={handleClose}>
          <div className= 'modals'>
            <div className='modals__head'>
              <h2>{modalLabel}</h2>
              <span className='modals__close' onClick={onClose}>x</span>
            </div>
            {children}
          </div>
        </div>
      )
    }
    return null
  }
  
  export default Modal;