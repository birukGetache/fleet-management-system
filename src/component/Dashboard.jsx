import React, { useEffect } from 'react';
import { MdNote } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import Card from './Card'
import AddAdmin from './AddAdmin';
import Landing from './Landing';

const Dashboard = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.js-fixed-anchor');
    const sections = document.querySelectorAll('.section');
    const bar = document.querySelector('.bar');

    const handleScroll = () => {
      sections.forEach((section, index) => {
        const beginPointer = section.offsetTop - 400;
        const lastPointer = beginPointer + section.clientHeight + 300;

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
      <section className="section" id='takenote'>
        <div className="icon">
   ?<Landing></Landing>
        </div>
      </section>
      <section className="section" id="addadmin">
        <div className="icon">
      <AddAdmin></AddAdmin>
        </div>
      </section>
      <section className="section" id="addcar">
        <div className="icon">
          <FaCar />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
