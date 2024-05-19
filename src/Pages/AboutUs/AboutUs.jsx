import animation from '../../assets/About us/Animation - 1701198416051.json'
import Lottie from 'lottie-react';

const AboutUs = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto my-10 pt-20">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <Lottie className="h-[450px] w-10/12" animationData={animation} loop={true}></Lottie>
                </div>

                <div className='flex-1 space-y-1'>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How to create account in the House Hunter?
                        </div>
                        <div className="collapse-content">
                            <p>Its so simple! Just go to Register and get Registered</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            How to find perfect House in House Hunter?
                        </div>
                        <div className="collapse-content">
                            <p>Go to Home Page and Search House!!!</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            How to Book House in House Hunter?
                        </div>
                        <div className="collapse-content">
                            <p>{`Tap on any house and Click on "Book this House"`}</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            How to manage bookings?
                        </div>
                        <div className="collapse-content">
                            <p>Go to Dashboard and Manage your booked house</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;