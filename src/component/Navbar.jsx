import React from 'react'
import './navbar.css'
import arrow from '../images/backArrow.png'
import logo from '../images/logo.png'
import group from '../images/Group.png'
const Navbar = () => {
  return (
    <div>
        <div className='navWrapper'>
            <div className='imges'>
<img src={arrow} alt="" width={20} height={10} />
            </div>

            <div>
            <img src={logo} alt="" width={150} height={30}/>

            </div>

            <div  className='imges'>
            <img src={group} alt="" width={50} height={20}/>

            </div>
        </div>

        <div className='navWrapper2'>
            <div>SHELTON STREET</div>
            <div id='div2'>CONVENT GARDEN</div>
            <div>LONDON</div>
            <div>WC2H</div>
            <div>UNITED KINGDOM</div>
        </div>

        <div className="navWrapper3">
            <div style={{textAlign:'center'}} className='wrap3A'>Sotheby's <br /> INTERNATIONAL </div>
            <div>£ 50,000,000 GBP</div>
            <div className='wrap3C'>#2M78965422</div>
        </div>

        <div className="navWrapper4">
            <div>PHOTOGRAPHER</div>
            <div>VIDEO</div>
            <div className=''>FLOOR PLAN</div>
            <div className="">MAP</div>
        </div>
    </div>
  )
}

export default Navbar