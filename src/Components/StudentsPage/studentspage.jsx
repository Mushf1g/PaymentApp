import React, { useState } from 'react';
import "./studentspage.css";
import Studentbottom from "../StudentBottomPage/studentbottom";
import axios from 'axios';

function Studentspage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [accountName, setAccountName] = useState('');
    const [surname, setSurname] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const postBtnHandler = () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        setErrorMessage('');

        axios.post('http://payments.ingress.academy/payments/v1/accounts', {
            email,
            username,
            accountName,
            surname,
        })
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => {
            console.error('Error:', error);
            setErrorMessage('Bir xəta oldu. Təkrar yoxlayın.');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section className='container studentsPage'>
            <section className='studentsTop'>
                <h2>Tələbəni daxil edin</h2>
                <div className='fee__check'>
                    <div>
                        <p>Email</p>
                        <input
                            type="text"
                            placeholder='Emaili daxil edin'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Nömrə</p>
                        <input
                            type="number"
                            placeholder='Nömrəni daxil edin'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className='fee__check'>
                    <div>
                        <p>Ad</p>
                        <input
                            type="text"
                            placeholder='Tələbənin adı'
                            value={accountName}
                            onChange={e => setAccountName(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Soyad</p>
                        <input
                            type="text"
                            placeholder='Tələbənin soyadı'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                    </div>
                </div>
                <div className='enterBtn'>
                    <button style={{ display: "none" }}>Back</button>
                    <button onClick={postBtnHandler} disabled={isSubmitting}>Daxil et</button>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </section>
            <Studentbottom />
        </section>
    );
}

export default Studentspage;
