import React from 'react'

export default function CheckoutSteps(props) {
  return (
    <div className='flex flex-wrap py-5 justify-around items-center checkout-steps'>
        <div className={props.step1 ? 'active': ''}>Create Vote</div>
        <div className={props.step2 ? 'active': ''}>Position</div>
        <div className={props.step3 ? 'active': ''}>Create Candidates</div>
        <div className={props.step4 ? 'active': ''}>Submit</div>
    </div>
  )
}
