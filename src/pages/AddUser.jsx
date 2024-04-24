import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/users/create", {
        username,
        password,
      });
      navigate("/user");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <form
          onSubmit={saveAccount}
          className="w-96 p-6 shadow-lg bg-white rounded-md"
        >
          <h1 className="text-3xl block text-center font-semibold">
            <FontAwesomeIcon icon={faUser} /> Add User
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
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
