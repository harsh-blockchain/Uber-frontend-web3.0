import React from 'react'
import avtaar from './assets/avtaar.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsPerson } from 'react-icons/bs'
import Link from 'next/link'
import logo from './assets/uber-logo.png'

const Navbar = () => {

    const currentAccount = '0*8C54544dscsd4c8ds4c15d15s1c5sdscbsvcd744fD'




    return (

        <div className='text-white bg-black justify-center'>
            <div className='py-4 flex items-center justify-between max-w-7xl mx-auto  '>
                <div className='flex space-x-40 items-center '>

                    <motion.div className=' items-center font-bold text-3xl cursor-pointer relative  h-14 w-24'
                        initial={{ x: -500, opacity: 0, scale: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    ><Link href={'/'}><div className=' items-center pt-[0.6rem] cursor-pointer'>
                        <Image src={logo} alt='uber' />
                    </div></Link></motion.div>


                    <motion.div className='flex space-x-10 items-center'
                        initial={{ x: -500, opacity: 0, scale: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className=' cursor-pointer font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>Ride</div>
                        <div className=' cursor-pointer font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>Drive</div>
                        <div className=' cursor-pointer font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>More</div>

                    </motion.div>
                </div>

                <motion.div className='flex space-x-10 items-center'
                    initial={{ x: 500, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className=' justify-center cursor-pointer font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>Help</div>
                    <div className=' font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>Harsh</div>
                    <div><Image src={avtaar} width={40} height={40} /></div>

                    {currentAccount ? (
                        <div className=' font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>{currentAccount.slice(0, 6)}.....{currentAccount.slice(39)}</div>

                    ) : (

                        <div className=' flex items-center gap-1 cursor-pointer font-semibold text-xl hover:bg-slate-100 hover:text-black hover:scale-110 hover:py-2 hover:px-4 hover:rounded-3xl'>
                            <div><BsPerson /></div>
                            <div>
                                Log In
                            </div>

                        </div>
                    )}
                </motion.div>
            </div>

        </div>
    )
}

export default Navbar