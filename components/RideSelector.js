import React, { useEffect } from 'react'
import uberSelect from './assets/uberSelect.png'
import uberx from './assets/uberX.png'
import uberxl from './assets/uberXL.png'
import uberBlack from './assets/uberBlack.png'
import uberBlackSuv from './assets/uberBlackSuv.png'
import ethlogo from './assets/eth-logo.png'
import Image from 'next/image'



const basePrice = 1000000;




const RideSelector = () => {




    return (
        <div className='h-full w-full flex-col'>
            <div className='text-gray-500 text-center text-lg py-2 border-b'>
                Choose a ride, or Swipe up for More
            </div>
            <div className='flex flex-col flex-1 overflow-scroll scrollbar-hide'>
                {carList.map((car, index) => (
                    <div className='hover:bg-slate-100 items-center rounded-2xl hover:scale-105'>
                        <div className='flex p-3 m-2 items-center border-2 border-white'>
                            <Image alt='img' src={car.image} height={50} width={50} />

                            <div className='ml-2 flex-1 flex flex-col'>
                                <div className='font-medium'>
                                    {car.name}
                                </div>

                                <div className='text-xs text-blue-500'>
                                    10 min away
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-[-0.8rem] items-center flex'>
                                    {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(6)}
                                    <Image alt='image' className='items-center' src={ethlogo} height={25} width={40} />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default RideSelector



const carList = [
    {
        name: 'Uber X',
        image: uberx,
        priceMultiplier: 1,
    },
    {
        name: 'Uber XL',
        image: uberxl,
        priceMultiplier: 1.5,
    },
    {
        name: 'Uber Blackk SUV',
        image: uberBlackSuv,
        priceMultiplier: 1.5,
    },
    {
        name: 'Uber Black',
        image: uberBlack,
        priceMultiplier: 1.5,
    },
    {
        name: 'Uber Selecct',
        image: uberSelect,
        priceMultiplier: 1.5,
    }
]