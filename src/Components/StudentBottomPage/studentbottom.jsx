import React, { useEffect, useState } from "react";
import Studentuser from "../StudentsUser/studentuser";
import axios from "axios";

function Studentbottom() {
  const [content, setUser] = useState([]);

  useEffect(() => {
    axios("http://payments.ingress.academy/payments/v1/accounts/all")
      .then((res) => {
        setUser(res.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
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
            {content.map((user, index) => (
              <tr key={user.id}>
                <Studentuser
                  index={index}
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
    </>
  );
}

export default Studentbottom;
