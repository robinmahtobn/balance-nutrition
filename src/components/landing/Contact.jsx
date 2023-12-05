import { arrow, phone, email, location } from '../../assets';

const Contact = () => {
    return (
        <div className="px-12 py-12 w-full bg-contact-web bg-no-repeat bg-cover hidden sm:flex items-center gap-5 justify-center">
            {/* left */}
            <div className="w-1/2">
                <div className="bg-white m-3 p-6 rounded">
                    <div className='mb-5'>
                        <h1 className="text-orange-100 text-2xl mb-2">Let's Get Started!</h1>
                        <p className='font-bold'>Please fill this form to know more about your health.</p>
                    </div>

                    {/* input feild */}
                    <div>
                        <div className='relative mb-7'>
                            <input type="text" placeholder='Name' required className='border-0 border-b-2 w-full focus:outline-none placeholder:text-black text-md pb-2 pl-2' />
                        </div>
                        <div className='mb-7'>
                            <input type="email" placeholder='Email' required className='border-0 border-b-2 w-full focus:outline-none placeholder:text-black text-md pb-2 pl-2' />
                        </div>
                        <div className='mb-7'>
                            <input type="number" placeholder='Phone Number' required className='border-0 border-b-2 w-full focus:outline-none placeholder:text-black text-md pb-2 pl-2' />
                        </div>
                        <div className='mb-7'>
                            <select name="contact" id="contact" className=' border-0 border-b-2 w-full focus:outline-none placeholder:text-black text-md pb-2 pl-2'>
                                <option value="vaiabh BN">Choose a Nutrition Expert</option>
                                <option value="vaiabh BN">Vaiabh BN</option>
                                <option value="vaiabh BN">Vaiabh BN</option>
                                <option value="vaiabh BN">Vaiabh BN</option>
                                <option value="vaiabh BN">Vaiabh BN</option>
                            </select>
                        </div>
                    </div>
                    {/* button */}
                    <button className='bg-green-100 w-52 py-2 text-white rounded shadow mb-2'>Click</button>
                </div>
            </div>
            {/* right */}
            <div className="w-1/2 ">
                <div className='flex flex-col justify-center gap-3'>
                    <div>
                        <h1 className='text-green-200 text-2xl'>Here is where the journey to a <span className='text-green-200 font-bold'>Healthier you begins.</span></h1>
                        <h1 className='text-green-200 text-2xl'>Speak with our expert now.</h1>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        {/* card 1 */}
                        <div className='bg-white p-3 flex items-center gap-5 rounded'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full p-2 bg-gray-100'>
                                    <img src={phone} alt="phone" className='w-10 h-10' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4 mb-2'>
                                    <h2 className='font-bold'>Contact Us</h2>
                                    <img src={arrow} alt="arrow" className='w-5 h-5' />
                                </div>
                                <p className='text-sm mb-1'>Nutritionist Aayushi :  <span className='text-green-200 font-bold text-sm'>+91 9152419847</span>
                                </p>
                                <p className='text-sm'>Nutritionist Vaishnavi : <span className='text-green-200 font-bold text-sm'>+91 9820017056</span></p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className='bg-white p-3 flex items-center gap-5 rounded'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full p-4 bg-gray-100'>
                                    <img src={email} alt="email" className='w-6 h-6' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4 mb-2'>
                                    <h2 className='font-bold'>Email Address</h2>
                                    <img src={arrow} alt="arrow" className='w-5 h-5' />
                                </div>
                                <p className='text-green-200 font-bold text-sm'>info@balancenutrition.in</p>
                                <p className='text-green-200 font-bold text-sm'>vishalrupani@balancenutrition.in</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='bg-white p-3 flex items-center gap-5 rounded'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full p-4 bg-gray-100'>
                                    <img src={location} alt="location" className='w-5 h-5' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4 mb-2'>
                                    <h2 className='font-bold'>Location</h2>
                                    <img src={arrow} alt="arrow" className='w-5 h-5' />
                                </div>
                                <p className='text-base mb-1'>
                                    Balance Nutrition Privy CenterAshirwad Bungalow, 1st Floor,Tagore Road, Near
                                </p>
                                <p className='text-base'>Laxminarayan Temple, Santacruz West,Mumbai - 400054  <span className='font-bold text-green-200 underline cursor-pointer'>Click here to view</span>
                                </p>
                                <p className='text-base text-green-200 font-bold underline cursor-pointer'>google map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;