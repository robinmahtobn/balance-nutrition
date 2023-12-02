import { appoinment } from '../../constants';

const Appoinment = () => {
    return (
        <div className="bg-[#FFFAE7] p-8 rounded">
            <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-2xl text-green font-bold tracking-widest'>The first step to a healthier you starts</h1>
                <h1 className='text-2xl text-green font-bold tracking-widest'>here.Talk to our experts now</h1>
            </div>
            <div className='w-full flex  gap-10'>
                {
                    appoinment.map((data, index) => {
                        return (
                            <div className='bg-white p-3 flex items-center gap-5 rounded' key={index}>
                                <div className='flex items-center justify-center'>
                                    <div className='rounded-full p-2 bg-gray-100'>
                                        <img src={data.icons} alt={data.title} className='w-10 h-10' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-4 mb-2'>
                                        <h2 className='font-bold'>{data.title}</h2>
                                        <img src={data.arrow} alt={data.title} className='w-5 h-5' />
                                    </div>
                                    <p className='text-sm mb-1'>{data.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Appoinment