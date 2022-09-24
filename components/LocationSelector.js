import React, { useState } from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { BiCaretDownSquare } from 'react-icons/bi'



const LocationSelector = () => {

    const [inFocus, setInFocus] = useState('from')
    const [pickUp, setPickUp] = useState('')
    const [dropOff, setDeopOff] = useState('')

    return (
        <div>
            <div className='pt-2'>
                <div className='w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden'>
                    {inFocus === 'from' ? 'Where can we pick you up?' : 'Where to?'}
                </div>
                <div className='flex flex-col  mb-4 relative'>
                    <div className={`${'h-10 mx-4 bg-[#eeeeee] flex items-center my-1 py-1 px-2'} ${inFocus === 'from' && 'border-2 border-black'}`}>
                        <div className='mx-1 items-center flex'>
                            <FaRegDotCircle />
                        </div>
                        <input className='my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full' placeholder='Enter Pickup Location'
                            value={pickUp}
                            onChange={e => { setPickUp(e.target.value) }}
                            onFocus={() => { setInFocus('from') }}

                        />

                    </div>


                    <div className='w-0 h-[3rem] border-black border absolute z-10 left-[2.3rem] top-[2.2rem]' />
                    {/* second input */}

                    <div className='pt-[1.4rem]'>
                        <div className={`${'h-10 mx-4 border-black  border-2  bg-[#eeeeee] flex items-center my-1 py-1 px-2'} ${inFocus === 'from' && ''}`}>
                            <div className='mx-1 items-center flex'>
                                <BiCaretDownSquare />
                            </div>
                            <input className='my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full' placeholder='Enter Dropoff Location'
                                value={dropOff}
                                onChange={e => { setDeopOff(e.target.value) }}
                                onFocus={() => { setInFocus('to') }}

                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSelector


