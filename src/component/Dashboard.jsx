import React, { useEffect } from 'react';
import { MdNote } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import AddAdmin from './AddAdmin';
import Landing from './Landing';
import AddCarForm from './AddCarForm';
const Dashboard = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.js-fixed-anchor');
    const sections = document.querySelectorAll('.sec');
    const bar = document.querySelector('.bar');

    const handleScroll = () => {
      sections.forEach((section, index) => {
        const beginPointer = section.offsetTop - 500;
        const lastPointer = beginPointer + section.clientHeight + 500;

        if (window.scrollY >= beginPointer && window.scrollY <= lastPointer) {
          bar.style.top = `${33 * index}%`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="container">
      <div className='mainnav'>
        <div className="bar"></div>
        <div className="iconbar">
          <a href='#takenote' className='js-fixed-anchor'>
            <MdNote className='i' /> <span>take note</span>
          </a>
        </div>
        <div className="iconbar">
          <a href='#addadmin' className='js-fixed-anchor'>
            <FaUser className='i' /> <span>add admin</span>
          </a>
        </div>
        <div className="iconbar">
          <a href='#addcar' className='js-fixed-anchor'>
            <FaCar className='i' /> <span>add car</span>
          </a>
        </div>
      </div>
      <section className='sec' id='takenote'>
        <div className="icon">
   <Landing></Landing>
        </div>
      </section>
      <section className="section sec" id="addadmin">
        <div className="icon">
      <AddAdmin></AddAdmin>
        </div>
      </section>
      <section className="section sec" id="addcar">
        <div className="icons">
         <AddCarForm></AddCarForm>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
