import React from 'react'
import "./coursespage.css"

function Coursespage() {
  return (
    <>
        <section className='coursesPage container'>
            <div className='coursesPageStart'>
                <h2>Kursu Daxil Edin</h2>
                <input type="text" placeholder='Kursun adı'/>
                <div className='enterBtn'>
                    <button>Daxil et</button>
                </div>
            </div>
            <div className='coursesPageEnd'>
                <h2>Tələbəni kursa əlavə edin</h2>
                <div className='coursesPageEndInputs'>
                    <input type="text" placeholder='Tələbənin nömrəsi' />
                    <select>
                        <option value="">Kursu seçin</option>
                        <option value="">ms87</option>
                        <option value="">fishing</option>
                        <option value="">ccna 200-301</option>
                        <option value="">ms-16</option>
                        <option value="">java</option>
                        <option value="">lua</option>
                        <option value="">rus</option>
                        <option value="">javascript</option>
                        <option value="">python</option>
                        <option value="">c++</option>
                        <option value="">ms8</option>
                    </select>
                </div>
                <div className='enterBtn'>
                    <button>Daxil et</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Coursespage