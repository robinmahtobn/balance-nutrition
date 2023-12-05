import { appoinment } from '../../constants';

const Appoinment = () => {
    return (
        <>
            <div className="bg-[#FFFAE7] px-16 pt-[68px] pb-[32px] rounded hidden sm:block">

                <div className='flex flex-col items-center justify-center my-14'>
                    <h1 className='text-[40px] text-green-300 font-bold tracking-wide'>The first step to a healthier you starts</h1>
                    <h1 className='text-[40px] text-green-300 font-bold tracking-wide'>here. Talk to our experts now</h1>
                </div>

                <div className='w-full flex gap-10'>
                    {
                        appoinment.map((data, index) => {
                            return (
                                <div className='bg-white p-7 flex items-center gap-5 rounded-xl' key={index}>
                                    <div className='flex items-center justify-center'>
                                        <div className='rounded-full p-3 bg-gray-100 w-16 h-16 flex items-center justify-center'>
                                            <img src={data.icons} alt={data.title} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-6 mb-2 group cursor-default'>
                                            <h2 className='font-bold text-xl group-hover:text-green-100 duration-200 ease-in-out'>{data.title}
                                                <span className='ml-6 text-3xl font-extrabold group-hover:ml-[10px] duration-300'>&#8594;</span>
                                            </h2>
                                            {/* <img src={data.arrow} alt={data.title} className='w-6 h-6 group-hover:ml-[-10px]  group-hover:' /> */}
                                        </div>
                                        <p className='text-gray-200 mb-1'>{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='  sm:hidden'>

            </div>
        </>
    )
}

export default Appoinment