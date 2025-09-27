"use client"
import { Brand } from '@/app/types/product.model'
import React, { useRef } from 'react'

export default function BrandCard({brand}:{brand:Brand}) {
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleOpenModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div>
            <div key={brand._id} className="card outline-gray-300 hover:shadow-lg shadow-blue-100 hover:outline-blue-500">
                <figure onClick={handleOpenModal}><img src={brand.image} alt="Shoes" /></figure>
                <p className='text-center mb-2 bg-blue-400/10'>{brand.name}</p>
            </div>
            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                  <figure className='flex justify-center outline-gray-500-2 rounded-lg bg-black/10'>
                   
                    <img src={brand.image} alt="Shoes" /></figure> 
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
