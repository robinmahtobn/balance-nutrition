import { logo, footer_phone, mail, instagram, linkedin, youtube, facebook } from '../../assets';

const Footer = () => {
    return (
        <div className="bg-footer-desktop bg-no-repeat bg-cover bg-center h-96 flex items-center justify-center">

            <div className='flex items-center justify-around w-full'>

                <div>
                    <img src={logo} alt="logo" className='w-28 h-28' />
                </div>

                <div className='flex items-center gap-10'>
                    <div>
                        <h2 className='font-bold mb-2'>Partnership</h2>
                        <ul className='list-disc text-sm ml-8'>
                            <li>Franchisee Plan</li>
                            <li>Franchisee Chapter</li>
                            <li>Gym Partner</li>
                            <li>Corporate Wellness</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold mb-2'>Help & Legal</h2>
                        <ul className='list-disc text-sm text-gray ml-8'>
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
                        <p className='font-bold'>+91 37646 78249</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <img src={mail} alt="mail" />
                        <p className='font-bold'>info@balancenutrition.in</p>
                    </div>

                    <div className='flex items-center gap-4 mt-6'>
                        <div>
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div>
                            <img src={linkedin} alt="linkedin" />
                        </div>
                        <div>
                            <img src={youtube} alt="facebook" />
                        </div>
                        <div>
                            <img src={facebook} alt="youtube" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;