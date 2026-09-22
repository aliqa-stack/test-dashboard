import React from 'react';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
export default function LoginForm() {
    const [form, setForm] = useState({Email: email, Username: username, Password: password})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const HandleChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const HandleForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try{
            const api = "http://localhost:3000/auth"
            const res = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                credentials: "include",
                body: JSON.stringify(form)
            })
            const data = await res.json()
            if(!res.ok){
                throw new Error(data.message || "login gagal")
            }
      
            navigate("/")
        }catch(err){
            setError(err.error)
        }finally{
        setLoading(false)
        }

     }
    


   return (
      <main className="bg-gray-50 px-4 md:px-8">
         <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
            <a href="#"></a>

            <div
                className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8">
                <h1 className="text-slate-900 text-center text-3xl font-bold">Sign up</h1>

                <form onSubmit={HandleForm} className="space-y-6 mt-10">
                    <div>
                    <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={HandleChange} placeholder="john@readymadeui.com" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                    </div>
                    <div>
                    <label htmlFor="username"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Username</label>
                    <input type="text" value={form.username} onChange={HandleChange} id="username" name="username" placeholder="jane doe" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                    </div>
                    <div>
                    <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Password</label>
                    <input type="password" id="password" name="password"value={form.password} onChange={HandleChange} placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                    </div>
                    {error && <p className='text-red-500 text-md'>{error}</p>}

                    <div className="flex items-start flex-wrap gap-2">


                    <a href="#"
                        className="ml-auto text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        Forgot password?
                    </a>
                    </div>

                    <button type="submit"
                    disabled={loading}
                    className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                    {loading ? 'signing..' : 'Sing up'}</button>

                    <div className="text-slate-900 text-sm text-center">Don't have an account? <a href="#"
                    className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Sign
                    up</a>
                    </div>
                </form>
            </div>
            </div>
         </div>
      </main>
   );
}