import one from '../../assets/Home/1.jpg';
import two from '../../assets/Home/2.jpg';
import three from '../../assets/Home/3.jpg';
import four from '../../assets/Home/4.jpg';
import five from '../../assets/Home/5.jpg';
import six from '../../assets/Home/6.jpg';
import seven from '../../assets/Home/7.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slider-1 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${one})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                                Luxury Retreat
                            </h1>
                            <p className='max-w-2xl'>Escape to a world of luxury and comfort. Immerse yourself in the opulence of our premium suites, where every detail is crafted for an unforgettable stay.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-2 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${two})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            {`City Explorer's Haven`}
                            </h1>
                            <p className='max-w-2xl'>Discover the heart of the city from our centrally located hotel. Explore nearby attractions and retreat to the comfort of our stylish accommodations after a day of adventure.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-3 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${three})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Seaside Paradise
                            </h1>
                            <p className='max-w-2xl'>Wake up to breathtaking ocean views in our seaside paradise. Experience the tranquility of coastal living paired with top-notch amenities for the ultimate beachfront getaway.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-4 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${four})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Business Travel Excellence
                            </h1>
                            <p className='max-w-2xl'>Ideal for business travelers, our hotel offers a seamless blend of sophistication and functionality. Elevate your work trip with our convenient amenities and attentive service.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-5 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${five})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Family-Friendly Oasis
                            </h1>
                            <p className='max-w-2xl'>Create lasting memories with your loved ones in our family-friendly oasis. From spacious rooms to kid-friendly activities, we ensure a delightful stay for the entire family.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-6 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${six})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Cultural Heritage Retreat
                            </h1>
                            <p className='max-w-2xl'>Immerse yourself in the rich history of the region with a stay at our cultural heritage retreat. Experience the charm of the surroundings while enjoying modern comforts.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider-7 */}
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center min-h-[600px] text-white flex items-center justify-center"
                        style={{ backgroundImage: `url(${seven})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                            Wellness Escape
                            </h1>
                            <p className='max-w-2xl'>Rejuvenate your mind, body, and soul with our wellness-focused accommodations. From spa treatments to healthy dining options, we prioritize your well-being throughout your stay.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
export default Banner;