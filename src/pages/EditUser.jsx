import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/users/update/${id}`, {
        username,
        password,
      });
      navigate("/user");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:4000/users/${id}`);
    setUsername(response.data.username);
    setPassword(response.data.password);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <form
          onSubmit={updateAccount}
          className="w-96 p-6 shadow-lg bg-white rounded-md"
        >
          <h1 className="text-3xl block text-center font-semibold">
            <FontAwesomeIcon icon={faUser} /> Edit
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label for="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="border border-slate-500 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label for="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={password}
              className="border border-slate-500 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
