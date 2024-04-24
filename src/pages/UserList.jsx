import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/users/");
    setUser(response.data);
  };

  const deleteAccount = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/users/delete/${id}`);
      getUsers();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="grid grid-rows-1 justify-center">
            <Link
              to={"add"}
              className="w-28 bg-sky-500 px-5 py-2 text-sm text-center mb-5 rounded-md"
            >
              Add New
            </Link>
            <table className="border border-slate-600 p-10">
              <thead>
                <tr>
                  <th className="py-5 px-5">Id</th>
                  <th className="py-5 px-5">Username</th>
                  <th className="py-5 px-5">Password</th>
                  <th className="py-5 px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="py-5 px-5">{user.id}</td>
                    <td className="py-5 px-5">{user.username}</td>
                    <td className="py-5 px-5">{user.password}</td>
                    <td>
                      <Link
                        to={`edit/${user.id}`}
                        className="bg-sky-500 px-5 py-2 text-sm mr-5 rounded-md"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteAccount(user.id)}
                        className="bg-red-600 px-3 py-2 text-sm mr-5 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
