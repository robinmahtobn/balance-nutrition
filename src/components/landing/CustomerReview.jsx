import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { half_star, star, line, testimonials } from '../../assets';


const CustomerReview = () => {

  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const MobileSettings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* customer view */}
      <div className="py-12 pl-12 hidden sm:flex sm:items-center sm:gap-2">
        <div className="w-1/4">
          <div>
            <h4 className='text-gray-500 text-sm'>Customer Reviews</h4>
            <div className='flex items-center gap-3 my-5'>
              <div className='flex items-center gap-3'>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={half_star} alt="half_star" />
              </div>
              <span className='text-gray-500 text-sm'>(4.6 stars / 2,000 reviews)</span>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='text-3xl text-green-200 flex items-center gap-2 justify-center'> <h1>Join a journey of</h1> <span className='flex flex-col gap-1 justify-center'>
                <span className='font-semibold'>10,000+</span>
                <div>
                  <img src={line} alt="line" />
                </div>
              </span></div>
              <h1 className='text-3xl text-green-200'>conscious people taking</h1>
              <h1 className='text-3xl text-green-200'>action</h1>
            </div>
          </div>
        </div>

          <Slider {...settings}
            className="w-3/4  overflow-hidden"
          >
            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

          </Slider>
        </div>


      {/* mobile responsive view */}
      <div className='p-5 sm:hidden'>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <p className='text-gray-500'>Customer review</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={half_star} alt="half_star" />
              <span className='text-gray-500 text-sm'>(4.6 stars / 2,000 reviews)</span>
            </div>
          </div>

          <div className='text-center text-lg font-bold text-green-200  my-6'>
            <h1>Join a journey of 10,000+ conscious people taking action</h1>
          </div>

          <Slider {...MobileSettings} className="mb-5">

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

            <div className='bg-white shadow-sm border-2 border-gray-100 rounded p-4 flex flex-col items-center justify-center'>
              <div>
                <img src={testimonials} alt="testimonials" className='mb-3' />
                <h2 className='font-semibold text-base '>Suneeta Ghosh <span className='text-green-100'>lost 22.4 kg</span> weight & reverse PCOS</h2>
              </div>
            </div>

          </Slider>

        </div>
      </div>
    </>
  )
}

export default CustomerReview;