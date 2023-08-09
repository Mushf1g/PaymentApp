import React, { useEffect, useState } from "react";
import Studentuser from "../Components/StudentsUser/studentuser";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Studentedit() {
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  const getAllUsers = () => {
    axios("http://payments.ingress.academy/payments/v1/accounts/all")
      .then((res) => {
        setUserList(res.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    axios(`http://payments.ingress.academy/payments/v1/accounts/${id}`).then(
      (res) => setUserData(res.data)
    );
  }, [id]);

  const inputChangeHandler = (e) => {
    setUserData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const saveBtnHandler = () => {
    axios
      .put(`http://payments.ingress.academy/payments/v1/accounts`, {
        ...userData,
      })
      .then((res) => getAllUsers());
  };
  return (
    <>
      <section className="container studentsPage">
        <section className="studentsTop">
          <h2>Telebeni Redaktə Et</h2>
          <div className="fee__check">
            <div>
              <p>Email</p>
              <input
                type="text"
                placeholder="Emaili daxil edin"
                value={userData?.email}
                name="email"
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <p>Nömrə</p>
              <input
                type="number"
                placeholder="Nömrəni daxil edin"
                value={userData?.username}
                name="username"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="fee__check">
            <div>
              <p>Ad</p>
              <input
                type="text"
                placeholder="Tələbənin adı"
                value={userData?.accountName}
                name="accountName"
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <p>Soyad</p>
              <input
                type="text"
                placeholder="Tələbənin soyadı"
                value={userData?.surname}
                name="surname"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="enterBtn">
            <button style={{ display: "none" }}>Back</button>
            <Link to="/students">Geri qayıt</Link>
            <button onClick={saveBtnHandler}>Yadda saxla</button>
          </div>
        </section>
        <section className="studentsBottom">
          <h2>Tələbələr</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Email</th>
                <th>Nömrə</th>
                <th>Redaktə</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user,index) => (
                <tr>
                  <Studentuser
                    index={index}
                    key={user.id}
                    id={user.id}
                    accountName={user.accountName}
                    surname={user.surname}
                    email={user.email}
                    username={user.username}
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

export default Studentedit;
