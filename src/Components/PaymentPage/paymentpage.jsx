import React, { useEffect, useState } from "react";
import "./paymentpage.css";
import Paymentuser from "../PaymentsUser/paymentuser";
import axios from "axios";

function Paymentpage() {
  const [content, setUsers] = useState([]);

  useEffect(() => {
    axios("http://payments.ingress.academy/payments/v1/payments/all")
      .then((res) => {
        setUsers(res.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section className="container paymentPage">
        <section className="paymentTop">
          <h2>Ödənişi daxil edin</h2>
          <div className="fee__check">
            <div>
              <p>Məbləğ</p>
              <input type="number" placeholder="Dərsin ödənişi" />
            </div>
            <div>
              <p>Çekin Tarixi</p>
              <input type="date" name="" id="" />
            </div>
          </div>
          <div className="selectCourse">
            <div>
              <p>Kursun ayı</p>
              <input type="number" placeholder="Ayı daxil edin" />
            </div>
            <div>
              <p>Kurs</p>
              <select>
                <option value="">Kursu seçin</option>
                {/* {content.map(user =>
                                <option>{user?.course?.name}</option>)}
                            <option value="">ms87</option> */}
              </select>
            </div>
          </div>
          <div className="selectStudent">
            <div>
              <p>Tələbə</p>
              <select>
                <option value="">Tələbə seçin</option>
              </select>
            </div>
            <div>
              <p>Çekin şəkli</p>
              <input type="file" className="inputFile" />
            </div>
          </div>
          <div className="cardName">
            <div>
              <p>Kartın sahibi</p>
              <input type="text" placeholder="Kart sahibinin adı" />
            </div>
            <div></div>
          </div>
          <div className="enterBtn">
            <button>Daxil et</button>
          </div>
        </section>

        <section className="paymentBottom">
          <table>
            <thead>
              <tr className="paymentTitles">
                <th>#</th>
                <th>Çek</th>
                <th>Məbləğ</th>
                <th>Tarix</th>
                <th>Aylıq</th>
                <th>Kurs</th>
                <th>İstifadəçi</th>
                <th>Kartın sahibi</th>
                <th>Redaktə</th>
              </tr>
            </thead>
            <tbody>
              {content.map((user,index) => (
                <tr>
                  <Paymentuser
                  index={index}
                    key={user.id}
                    id={user.id}
                    amount={user.amount}
                    receiptPaymentDate={user.receiptPaymentDate}
                    coursePaymentMonth={user.coursePaymentMonth}
                    name={user?.course?.name}
                    accountName={user?.account?.accountName}
                    surname={user?.account?.surname}
                    base64EncodedPhoto={user?.receipt?.base64EncodedPhoto}
                    cardName={user.cardName}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default Paymentpage;
