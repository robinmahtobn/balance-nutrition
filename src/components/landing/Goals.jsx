import { heart, weight, heart_measure, speedometer } from '../../assets';
import { goal } from '../../constants';

const Goals = () => {
  return (
    <div className="container mx-auto px-10 py-10 sm:px-20 sm:py-20 bg-[#FAF6F6]">

      <div className='flex flex-col items-center gap-7 '>
        <h1 className="text-green-200 font-bold  text-xl sm:text-4xl">Improve your health holistically, more consistently and experience </h1>
        <h1 className="text-green-200 font-bold  text-xl sm:text-4xl">like never before.</h1>
      </div>

      <p className="text-center text-black text-2xl my-8">To start, Please select your goal:</p>

      <div className="hidden sm:flex items-center gap-10 mb-10">

        <div className="w-[767PX] bg-white shadow rounded-lg box-border	overflow-hidden flex items-start justify-between h-[275PX] relative hover:shadow-md hover:border hover:border-green-200">

          <div className='flex p-5 gap-3'>
            <div className='bg-green-200 flex p-3 rounded'>
              <img src={weight} alt="weight" />
            </div>

            <div>
              <h1 className='text-green-200 font-bold text-2xl mb-1'>Weight Management</h1>
              <p className='text-gray text-md'>Lose weight or gain weight</p>
            </div>
          </div>

          <img src={speedometer} alt="speedometer" className='absolute bottom-0 right-0' />

        </div>


        <div className="w-[600PX] h-[275PX] bg-white shadow rounded relative">

          <div className='flex p-5 gap-3'>
            <div className='bg-green-200 p-3 rounded'>
              <img src={heart} alt="heart" />
            </div>

            <div>
              <h1 className='text-green-200 font-bold text-2xl mb-1'>Manage Clinical Conditions</h1>
              <p className='text-gray text-md'>Duis aute irure dolor in reprehenderit in</p>
              <p className='text-gray text-md'>voluptate velit esse cillum dolore eu fugiat</p>
            </div>
          </div>

          <img src={heart_measure} alt="heart_measure" className='absolute bottom-0 right-0' />


        </div>

      </div>

      <div className='grid grid-cols-2 gap-5 place-content-center sm:flex sm:itmes-center sm:gap-10'>
        {
          goal.map((data, index) => {
            return <div key={index} className='bg-white w-full p-4 sm:w-1/4 sm:p-8 flex flex-col items-center sm:items-start shadow rounded'>
              <div className='mb-3'>
                <img src={data.icons} alt={data.title} className='bg-green-200 p-3 rounded w-12 h-12 sm:w-16 sm:h-16' />
              </div>
              <div className='flex flex-col items-center sm:items-start justify-center'>
                <h1 className='text-green-200 font-bold text-sm sm:text-2xl'>{data.title}</h1>
                <p className='hidden sm:block text-base text-gray'>{data.desc}</p>
              </div>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Goals;