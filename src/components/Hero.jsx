import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl mb-3">
                Hallo semua, selamat datang di
                <span className="block font-bold text-slate-700 text-4xl mt-1 lg:text-5xl">
                  JSBlog
                </span>
              </h1>
              <p className="text-slate-500 mb-4">
                Belajar javascript dengan tutorial yang mudah dipahami
              </p>
              <Link
                className="text-base font-semibold bg-sky-600 py-2 px-3 rounded-lg text-white hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out"
                to="/blog"
              >
                Lihat Blog
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10">
                <img
                  src="../../public/hero-right.png"
                  className="max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
