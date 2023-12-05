import { logo, banner_left } from '../assets';
import Goals from '../components/landing/Goals';
import Contact from '../components/landing/Contact';
import Appoinment from '../components/landing/Appoinment';
import Footer from '../components/landing/Footer';
import Recipies from '../components/landing/Recipies';
import CustomerReview from '../components/landing/CustomerReview';


const Home = () => {
  return (
    <>
      <nav className='container px-20 py-5 bg-white'>
        <div className='flex items-center justify-center sm:justify-start'>
          <img src={logo} alt="logo" />
        </div>
      </nav>

      <div className='bg-[#E6F0F1]  sm:hidden'>
        <p className='p-2 text-sm text-green-200'>To Know Your Ideal Body Weight, BMI & Obesity Degree - <span className='font-bold text-green text-md underline'>CLICK HERE</span></p>
      </div>

      {/* desktop view */}
      <div className='hidden sm:block w-full h-[583px] bg-hero-pattern bg-no-repeat bg-cover'>
        <div className='container mx-auto pl-20 flex flex-row items-center'>
          
          <div className='bg-white px-10'>
            <img src={banner_left} alt="banner_left" className='hidden sm:block' />
          </div>

          <div className='flex flex-col justify-center h-full pl-10'>

            <div className='mb-8 flex flex-col'>
              <h1 className='text-5xl font-bold text-yellow z-10'>
                <span className='text-2xl text-green-200 font-[900]'>REAL!</span>
                Weight Loss
              </h1>

              <div className='flex ml-16'>
                <span className='text-lg text-green-200'>real life-changing results</span>
                <span style={{
                  fontFamily: 'Bilbo Swash Caps'
                }}
                  className='text-green-200 text-4xl text-center mt-[-14px]'
                >Stories</span>
              </div>
            </div>

            <div className='mb-12'>
              <h1 className='text-5xl text-green-200'>
                Start Your <span className='font-bold'>Balance Nutrition</span>
              </h1>
              <h2 className='text-5xl text-green-200'>Weight-Loss Journey!</h2>
            </div>

            <div className='flex items-center flex-wrap gap-7'>
              <div className='bg-[#F8F2DC] px-10 py-5 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold'>50K+</h3>
                <span className='text-gray'>Clients Globally</span>
              </div>
              <div className='bg-[#F8F2DC] px-10 py-5 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold'>90.3%</h3>
                <span className='text-gray'>Success Rate</span>
              </div>
              <div className='bg-[#F8F2DC] px-10 py-5 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold'>18+</h3>
                <span className='text-gray'>Years Experience</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* mobile view */}
      <div className='w-screen h-[300px] bg-hero-pattern-mobile bg-no-repeat bg-cover sm:hidden'>

        <div className='container mx-auto pl-3'>
          <div className='flex flex-col justify-center h-full '>

            <div className='mb-4 w-72 flex flex-col mt-7'>
              <h1 className='text-xl font-bold text-yellow z-10'>
                <span className='text-md text-green-200 font-[900]'>REAL!</span>
                Weight Loss
              </h1>

              <div className='mt-[-16px] pl-10'>
                <span className='text-[8px] text-green-200 font-bold'>real life-changing results</span>
                <span style={{
                  fontFamily: 'Bilbo Swash Caps'
                }}
                  className='text-green-200 text-2xl'
                >Stories</span>
              </div>
            </div>

            <div className='mb-4'>
              <h1 className='text-xl text-green-200'>
                Start Your <span className='font-bold'>Balance</span>
              </h1>
              <h1 className='text-xl text-green-200'>
                <span className='font-bold'>Nutrition</span>Weight-Loss
              </h1>
              <h2 className='text-xl text-green-200'>Journey!</h2>
            </div>

            <div className='flex items-center justify-center gap-4'>

              <div className='bg-[#F8F2DC] px-5 py-3 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold text-sm '>50K+</h3>
                <span className='text-gray text-sm text-[9px]'>Clients Globally</span>
              </div>

              <div className='bg-[#F8F2DC] px-5 py-3 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold text-sm'>90.3%</h3>
                <span className='text-gray text-sm text-[9px]'>Success Rate</span>
              </div>

              <div className='bg-[#F8F2DC] px-5 py-3 flex items-center justify-center flex-col rounded-lg'>
                <h3 className='text-yellow font-bold text-sm'>18+</h3>
                <span className='text-gray text-sm'>Years Experience</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Goals />
      <CustomerReview />
      <Contact />
      <Recipies />
      <div className='bg-white px-20 py-16'>
        <Appoinment />
      </div>
     
      <Footer />
    </>
  )
}

export default Home;