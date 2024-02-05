import React, { useEffect } from 'react';
import { faHouse, faCodePullRequest, faCartShopping, faBagShopping, faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './assets/logo.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

const Sidebar4 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className='menu md:w-52 lg:w-52 px-7'>
      <div className='logo delay-[300ms] duration-[600ms]' data-aos="fade-up">
        <img src={Logo} className=' logo-icon  shadow-2xl shadow-black-500/40' alt='Logo' />
      </div>
      <div className='menu--list'>
        <h1 className='item active delay-[100ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faHouse} size="2x" className=' icon' />
          Home
        </h1>
        <h1 to='/User' className='item delay-[300ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faCodePullRequest} size="2x" className=' icon' />
          Requests
        </h1>
        <h1 to='/Finance' className='item delay-[600ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faCartShopping}  size="2x" className=' icon' />
          All-items
        </h1>
        <h1 to='/operations' className='item delay-[900ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faBagShopping} size="2x" className=' icon' />
          Items-in
        </h1>
        <h1 to='/Report' className='item delay-[400ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faTrash} size="2x" className=' icon' />
          Items-out
        </h1>
        <h1 to='/Settings' className='item delay-[500ms] duration-[600ms]' data-aos="fade-down">
        <FontAwesomeIcon icon={faGear} size="2x" className=' icon' />
          Settings
        </h1>
      </div>
      
    </div>
    <div className='parts'>
      
    </div>
    </>
    
  );
};

export default Sidebar4;
