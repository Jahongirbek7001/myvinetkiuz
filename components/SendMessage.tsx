'use client'

import { useState } from 'react'
import Image from "next/image"

export default function Example() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phonenumber: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/send-messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()
            if (res.ok) {
                alert('Yuborildi!')
                setFormData({ firstname: '', lastname: '', phonenumber: '' })
            } else {
                alert(`Xatolik: ${result.error}`)
            }
        } catch (error) {
            console.error(error)
            alert('Server bilan aloqa yo‘q')
        }
    }

    return (
        <div className="isolate bg-white/60 p-6" id='form'>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                    Связаться с менеджером
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    Ma’lumotlaringizni yuboring, biz siz bilan tez orada bog‘lanamiz.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className=" w-[90%] md:w-[60%] mx-auto mt-5 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstname" className="block text-sm/6 font-semibold text-gray-900">
                                Имя
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastname" className="block text-sm/6 font-semibold text-gray-900">
                                Фамилия
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="phonenumber" className="block text-sm/6 font-semibold text-gray-900">
                                Номер телефона
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <input
                                        id="phonenumber"
                                        name="phonenumber"
                                        type="text"
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        placeholder=""
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 sm:col-span-2">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
