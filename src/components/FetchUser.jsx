import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchUser() {
  const [user, setUser] = useState([]);
  const [identifier, setIdentifier] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);

    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUser(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="grid grid-rows-1 justify-center">
            <input
              type="text"
              name="identifier"
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="input"
              className="mb-5 border border-slate-600 p-3"
            />
            {loading ? (
              <div>Loading ...</div>
            ) : (
              <table className="border-collapse border border-slate-600 border-spacing-3">
                <thead>
                  <tr>
                    <th className="py-3" s>
                      Name
                    </th>
                    <th className="py-3">Username</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Website</th>
                    <th className="py-3">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-6">{user.name}</td>
                    <td className="py-3 px-6">{user.username}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.website}</td>
                    <td className="py-3 px-6">{user.phone}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
