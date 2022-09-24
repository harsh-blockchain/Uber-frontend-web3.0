import React from 'react'
import RideSelector from './RideSelector'

const Confirm = () => {

    const storeTripDetails = async () => { }


    return (
        <div className='flex-1 h-full flex flex-col justify-between'>
            <div className='h-full flex flex-col overflow-scroll scrollbar-hide'>
                <RideSelector />

            </div>

            <div className='border-t-2 cursor-pointer z-10 sticky'>
                <div className='bg-black rounded-lg hover:bg-purple-700 text-white m-4 py-4 text-center text-xl'
                    onClick={() => storeTripDetails()}
                >
                    Confirm Ride

                </div>
            </div>

        </div>
    )
}

export default Confirm