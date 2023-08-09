import React from 'react'
import "./expensespage.css"

function Expensespage() {
  return (
    <>
        <section className='container expensesPage'>
            <h3>Xərci daxil edin</h3>
            <div className='fee__check'>
                <div>
                    <p>Xərc dəyəri</p>
                    <input type="text" placeholder='Xərcin ödənişi'/>
                </div>
                <div>
                    <p>Tarix</p>
                    <input type="date" />
                </div>
            </div>
            <div className='fee__check'>
                <div>
                    <p>Xərc dəyəri</p>
                    <input type="text" placeholder='Xərcin adı'/>
                </div>
                <div>
                    <p>Tarix</p>
                    <input type="text" placeholder='Kartın sahibini daxil edin'/>
                </div>
            </div>
            <div className='fee__check'>
                <div>
                    <p>Şəkil</p>
                    <input type="file" name="" id="" />
                </div>
                <div></div>
            </div>
            <div className='enterBtn'>
                <button>Daxil et</button>
            </div>
        </section>
    </>
  )
}

export default Expensespage