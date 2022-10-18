import React, {Fragment ,useContext, useState} from 'react'
import { Container } from './Navbar'
import '../Styles/Pricing.css'
import {FcCheckmark} from 'react-icons/fc'

function Pricing() {
  const {toggle} = useContext(Container)
  const [toggleBasic, setToggleBasic] = useState(true)
  const [toggleStandard, setToggleStandard] = useState(true)
  const [togglePremium, setTogglePremium] = useState(true)
  const [basicCost, setBasicCost] = useState("7.99")
  const [standardCost, setStandardCost] = useState("12.99")
  const [PremiumCost, setPremiumCost] = useState("18.99")

  return (
    <Fragment>
      <div className={toggle ? 'background-Color-Main' : 'background-Color-secondary'}>
        <div className='Pricing-container'>
          <div className={toggle? 'Pricing-option1' : 'light-Theme1'}>
            <h2>Basic</h2>
            <div className='Price'>
              <h3>{basicCost}$</h3><h4 id='MonthlyYearly'>{toggleBasic ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark' />Unlimited Films and tv programmes</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Watch on mobile phones and tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Cancle at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />First month cimpletely free</span>
            <button id='button1'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=> {setToggleBasic(!toggleBasic) 
              if (toggleBasic){
                setBasicCost("60")
              }else{
                setBasicCost("7.99")
              }}}>
                <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>
          <div className={toggle? 'Pricing-option2' : 'light-Theme2'}>
            <h2>Standard</h2>
            <div className='Price'>
              <h3>{standardCost}$</h3><h4 id='MonthlyYearly'>{toggleStandard ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark' />Unlimited Films and tv programmes</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Watch on mobile phones and tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Cancle at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />First month cimpletely free</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />HD available</span>
            <button id='button2'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=> {setToggleStandard(!toggleStandard) 
              if (toggleStandard){
                setStandardCost("120")
              }else{
                setStandardCost("12.99")
              }}}>
                <div className={toggleStandard ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>
          <div className={toggle? 'Pricing-option3' : 'light-Theme3'}>
            <h2>Premium</h2>
            <div className='Price'>
              <h3>{PremiumCost}$</h3><h4 id='MonthlyYearly'>{togglePremium ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark' />Unlimited Films and tv programmes</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Watch on mobile phones and tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Cancle at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />First month cimpletely free</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />HD available</span>
            <span><FcCheckmark fontSize={25} id='checkmark' />Altra HD</span>
            <button id='button3'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=> {setTogglePremium(!togglePremium) 
              if (togglePremium){
                setPremiumCost("150")
              }else{
                setPremiumCost("15.99")
              }}}>
                <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Pricing