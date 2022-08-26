import React from 'react'
import { useRouter } from 'next/router';

export default function Cooperative() {
  const router = useRouter();
  const ModalP = () => {
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('flex')
    editModal.classList.add('hidden')
}
const ModalM = () => {
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('hidden')
    editModal.classList.add('flex')
}
  return (
    <>
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Coopératives</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Coopératives</span>
                </div>
            </div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
                <div className="flex flex-col text-center lg:text-left">
                    <h3 className="text-md">Bonne journée, AdminName!</h3>
                    <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center text-xs bg-gray-700/40 rounded">
                        <span className='px-3'>Vendredi 14 Aout 2022</span>
                        <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                    </div>
                    <div className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                        <i className='bx bx-plus-circle'></i>
                        <span>Ajouter un produit</span>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des coopératives</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Rechercher cooperative" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Joindre
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nombre des produits
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                <img className="w-10 h-10 rounded-full" src="/cooperative/coop-1.jpg" />
                                <div className="pl-3">
                                    <div className="text-md">Ahmed</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>  
                            </th>
                            <td className="py-4 px-6">
                                16-04-2020
                            </td>
                            <td className="py-4 px-6">
                                2
                            </td>
                            <td className="py-4 px-6 text-red-500 space-x-10">
                                <a onClick={ModalM} href="#" className="font-medium  text-custGreen hover:underline">Modifier</a>
                                <a href="#" className="font-medium  text-red-500  hover:underline">Supprimer</a>
                            </td>
                        </tr>
                        <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                <img className="w-10 h-10 rounded-full" src="/cooperative/coop-2.png" />
                                <div className="pl-3">
                                    <div className="text-md">Ahmed</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>  
                            </th>
                            <td className="py-4 px-6">
                                16-04-2020
                            </td>
                            <td className="py-4 px-6">
                                2
                            </td>
                            <td className="py-4 px-6 text-red-500 space-x-10">
                                <a onClick={ModalM} href="#" className="font-medium  text-custGreen hover:underline">Modifier</a>
                                <a href="#" className="font-medium  text-red-500  hover:underline">Supprimer</a>
                            </td>
                        </tr>
                        <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                <img className="w-10 h-10 rounded-full" src="/cooperative/coop-3.png" />
                                <div className="pl-3">
                                    <div className="text-md">Ahmed</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>  
                            </th>
                            <td className="py-4 px-6">
                                16-04-2020
                            </td>
                            <td className="py-4 px-6">
                                2
                            </td>
                            <td className="py-4 px-6 text-red-500 space-x-10">
                                <a onClick={ModalM} className="font-medium  text-custGreen hover:underline">Modifier</a>
                                <a href="#" className="font-medium  text-red-500  hover:underline">Supprimer</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="fixed top-0 hidden fade editModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ModalP} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[60%]">
                <i onClick={ModalP} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Modifier coopérative coopName !</h1>
                <form className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-2">
                        <span>Nom</span>
                        <input type="text" defaultValue="coopName"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>email</span>
                        <input type="email" defaultValue="coopName@copp.com"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Téléphone</span>
                        <input type="text" defaultValue="0615234584"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Adresse</span>
                        <input type="email" defaultValue="coopName Marrakech"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div class="col-span-2 flex justify-center items-center w-full">

                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                            <div class="flex flex-col justify-center items-center pt-5 pb-6">

                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>

                            </div>

                            <input id="dropzone-file" type="file" class="hidden" />

                        </label>

                    </div>
                    <input type="submit" value="Enregistrer" className="col-span-2 outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200"/>
                </form>
            </div>
        </div>
    </>
  )
}
