import React from 'react'
import './Footer.css';
import Image from 'next/image';
import Insta from '../../../../public/Insta.png'
import LinkedIn from '../../../../public/a.png'
import Gpay from '../../../../public/Gpay.png'
import MasterCard from '../../../../public/MasterCard.png'
import Paypal from '../../../../public/PayPal.png'
import Amex from '../../../../public/Amex.png'
import ApplePay from '../../../../public/ApplePay.png'
import Opay from '../../../../public/Opay.png'

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className='mettamuse-links'>
          <h3>metta muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Complainces Docs</li>
            </ul>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
            <ul>
              <li>Orders & Shopping</li>
              <li>Join/Login as a seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className='followpay-container'>
          <div className='follow'>
            <h3>FOLLOW US</h3>
            <span>
              <Image src={Insta} alt='Instagram icon'/>
              <Image src={LinkedIn} alt='LinkedIn icon'/>
            </span>
          </div>
          <div className='pay-links'>
            <h3>metta muse ACCEPTS</h3>
            <span>
              <Image src={Gpay} alt='Gpay icon'/>
              <Image src={MasterCard} alt='MasterCard icon'/>
              <Image src={Paypal} alt='Paypal icon'/>
              <Image src={Amex} alt='Amex icon'/>
              <Image src={ApplePay} alt='ApplePay icon'/>
              <Image src={Opay} alt='Opay icon'/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer