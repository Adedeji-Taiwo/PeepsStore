import {useState} from 'react'
import PeepItem from './PeepItem'


function Peep({title, body}) {

  const [open, setOpen] = useState({view:false})


  const handleClose = () => {
    setOpen({view:false})
  }

 


  return (
    <div className='peep'>
        <div className='peep__body'>
            <h4>{title}</h4>
            <p>{body}</p>
            <button 
                className='main-btn btn-hover'
                onClick={() => setOpen({...open, view: true})}>
                View
          </button>
        </div>
    
      {open.view &&
        <PeepItem 
          onClose={handleClose} 
          title={title} 
          body={body} 
          open={open.view} />
      }

    </div>
  )
}

export default Peep;