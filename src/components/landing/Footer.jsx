import { logo, footer_phone, mail, instagram, linkedin, youtube, facebook } from '../../assets';

const Footer = () => {
    return (
        <>
           {/* desktop view */}
            <div className="bg-footer-desktop bg-no-repeat bg-cover bg-center h-[471px] hidden sm:flex flex-col justify-between py-10 items-center ">


                <div className='flex items-center justify-around w-full pt-10'>

                    <div>
                        <img src={logo} alt="logo" className='w-28 h-28' />
                    </div>

                    <div className='flex items-center gap-10'>
                        <div>
                            <div className='mb-[14px]'>
                                <h2 className='font-bold mb-2'>Partnership</h2>
                                <div className='w-10 h-[1px] bg-yellow mt-[-5px]'></div>
                            </div>

                            <ul className='list-disc text-sm text-gray ml-8 leading-7'>
                                <li>Franchisee Plan</li>
                                <li>Franchisee Chapter</li>
                                <li>Gym Partner</li>
                                <li>Corporate Wellness</li>
                            </ul>

                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <h2 className='font-bold mb-2'>Help & Legal</h2>
                                <div className='w-10 h-[1px] bg-yellow mt-[-5px]'></div>
                            </div>

                            <ul className='list-disc text-sm text-gray ml-8 leading-7'>
                                <li>Contact Us</li>
                                <li>Terms & Privacy Policy</li>
                                <li>FAQ</li>
                                <li>Disclaimer</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-2 mb-3'>
                            <img src={footer_phone} alt="footer_phone" />
                            <p className='font-bold'>
                                +91 37646 78249
                                <div className='bg-black w-32 h-[1px]'></div>
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={mail} alt="mail" />
                            <p className='font-bold'>info@balancenutrition.in</p>
                        </div>

                        <div className='flex items-center gap-4 mt-6'>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={instagram} alt="instagram" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={youtube} alt="facebook" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={facebook} alt="youtube" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full flex items-center flex-col gap-5 justify-center'>
                    <hr className='w-full' style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%), #272523' }} />
                    <small className='text-base'>&#xa9; 2014 - 2023. www.balancenutrition.in</small>
                </div>

            </div>
           
           {/* mobile responsive view */}
            <div className='w-full  bg-footer-mobile bg-no-repeat bg-cover  sm:hidden'>

                <div className='px-5 pt-4 flex-col justify-center items-center'>
                    <div className='mb-5'>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='flex gap-12 mb-7'>
                        <div>
                            <div className='mb-[14px]'>
                                <h2 className='font-bold mb-2'>Partnership</h2>
                                <div className='w-10 h-[1px] bg-yellow mt-[-5px]'></div>
                            </div>

                            <ul className='list-disc text-sm text-gray ml-8 leading-7'>
                                <li>Franchisee Plan</li>
                                <li>Franchisee Chapter</li>
                                <li>Gym Partner</li>
                                <li>Corporate Wellness</li>
                            </ul>

                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <h2 className='font-bold mb-2'>Help & Legal</h2>
                                <div className='w-10 h-[1px] bg-yellow mt-[-5px]'></div>
                            </div>

                            <ul className='list-disc text-sm text-gray ml-8 leading-7'>
                                <li>Contact Us</li>
                                <li>Terms & Privacy Policy</li>
                                <li>FAQ</li>
                                <li>Disclaimer</li>
                            </ul>
                        </div>
                    </div>

                    <div className='mb-8'>
                        <div className='flex items-center gap-2 mb-3'>
                            <img src={footer_phone} alt="footer_phone" />
                            <p className='font-bold'>
                                +91 37646 78249
                                <div className='bg-black w-32 h-[1px]'></div>
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={mail} alt="mail" />
                            <p className='font-bold'>info@balancenutrition.in</p>
                        </div>

                        <div className='flex items-center gap-4 mt-6'>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={instagram} alt="instagram" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={youtube} alt="facebook" />
                            </div>
                            <div className='bg-[#F0EDDE] p-2 rounded'>
                                <img src={facebook} alt="youtube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center flex-col gap-5 justify-center py-4'>
                    <hr className='w-full' style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%), #272523' }} />
                    <small className='text-base'>&#xa9; 2014 - 2023. www.balancenutrition.in</small>
                </div>

            </div>
        </>
    )
}

export default Footer;