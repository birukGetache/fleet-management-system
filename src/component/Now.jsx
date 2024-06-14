import React from 'react'

const Now = (props) => {
  return (
    <div className='all'>
        <div className='one'>
          <p><span> last modified:-</span> {props.lastmodified}</p>
          <p><span className='lastdate'>date :-</span> {props.last}</p>
        </div>
        <div className='two'>
            <p><span>where done last:-</span> {props.lastworkcity}</p>
            <p><span>what to be done :-</span>{props.lastworkpro}</p>
            <span className='lastdate'><span>date :- </span>{props.lastmakedate}</span>
        </div>
    
  
</div>)
}
export default Now;
