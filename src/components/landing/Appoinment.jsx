import { appoinment } from '../../constants';

const Appoinment = () => {
    return (
        <>
            {/* desktop view */}
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

            {/* mobile responsive view */}
            <div className='p-5 sm:hidden'>
                <div className='bg-[#FFFAE7] p-5'>
                    <h1 className='text-center text-green-200 font-bold text-[20px] mb-5'>The first step to a healthier you starts here. Talk to our experts now</h1>

                    <div className=''>
                        {
                            appoinment.map((data, index) => {
                                return (
                                    <div key={index} className='py-4 px-[22px] flex items-center justify-center gap-4 rounded-lg bg-white mb-4'>

                                        <div className='w-2/12'>
                                            <img src={data.icons} alt={data.title} className='bg-[#F4F4F4] p-3 rounded-full' />
                                        </div>
                                        <div className='w-3/4 flex flex-col justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <h1 className='text-lg font-bold'>{data.title}</h1>
                                                <img src={data.arrow} alt={data.arrow} />
                                            </div>

                                            <p className='text-sm'>{data.desc}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default Appoinment