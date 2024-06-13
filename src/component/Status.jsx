import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const StatusContainer = (props) => {
  return (
    <div className='status-container'>
      <div className='status-header'>
        <p>Status of Now</p>
        <FontAwesomeIcon icon={faChevronDown} className='down-arrow' />
      </div>
      <p className='status'><span>status:-</span>{props.status}</p>
      <p className='status'><span>site:-</span>{props.site}</p>
      <p className='status'><span>city:-</span>{props.city}</p>
      <p className='status'><span>projectname:-</span>{props.projectname}</p>

    </div>
  );
};

export default StatusContainer;
