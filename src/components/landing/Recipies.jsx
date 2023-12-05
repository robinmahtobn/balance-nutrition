import { recipie_img1, recipie_img2, recipie_img3, recipie_img4 } from '../../assets';

const Recipies = () => {
    return (
        <>
            <div className='px-12 pt-16 hidden sm:block'>
                <div className='flex items-end gap-5 mb-10'>
                    <div className='w-3/12'>
                        <img src={recipie_img1} alt="recipie_img1" />
                    </div>
                    <div className='w-3/12'>
                        <img src={recipie_img2} alt="recipie_img2" className='rounded-lg' />
                    </div>
                    <div className='w-9/12'>
                        <h1 className='font-bold text-green-200 text-xl mb-2 ml-4'>Best <span className='text-yellow'>Recipes & Health Reads</span>for you.</h1>
                        <p className='text-sm leading-6'>Lorem ipsum dolor sit amet consectetur. Massa imperdiet feugiat dictumst nisl leo. Dui morbi aliquam consequat ornare dolor dui faucibus vitae id. Ultrices molestie in nunc iaculis sed dignissim et. Vel eu amet nisl donec eu mauris pharetra feugiat. </p>
                    </div>
                </div>
                <div className='flex items-end gap-6'>
                    <div>
                        <img src={recipie_img3} alt="recipie_img3" />
                    </div>
                    <div>
                        <img src={recipie_img4} alt="recipie_img4" />
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 flex  sm:hidden'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div className='grow'>
                            <img src={recipie_img1} alt="recipie_img1" />
                        </div>
                        <div className='grow'>
                            <img src={recipie_img2} alt="recipie_img2" />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=''>
                            <img src={recipie_img3} alt="recipie_img3" />
                        </div>
                        <div className=''>
                            <img src={recipie_img4} alt="recipie_img4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipies