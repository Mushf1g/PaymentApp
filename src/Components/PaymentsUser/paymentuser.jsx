import React from 'react'
import { Link } from 'react-router-dom'

function Paymentuser({id,index,base64EncodedPhoto,amount,receiptPaymentDate,coursePaymentMonth,name,accountName,surname,cardName}) {
  return (
    <>
        <td>{index + 1}</td>
        <td className='paymentCheckImg'>
            <img src={`data:image/jpeg;base64,${base64EncodedPhoto}`} alt="" />
        </td>
        <td>{amount}</td>
        <td>{receiptPaymentDate}</td>
        <td>{coursePaymentMonth}</td>
        <td>{name}</td>
        <td>{accountName} {surname}</td>
        <td>{cardName}</td>
        <td><Link>Redaktə et</Link></td>
    </>
  )
}

export default Paymentuser