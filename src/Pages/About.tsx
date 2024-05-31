import aboutImg from '../assets/about-us.png'
import fullImg from '../assets/about-hero.png'

const AboutUs = () => {
    return (
        <div className="pt-12 pb-6 sm:pt-28">
            <div className="about-hero">
            </div>
            <section className='text-Black flex items-center flex-wrap py-10 px-[5%] gap-8'>
                <div className='grow basis-[350px]'>
                    <div className='max-w-[550px] ml-auto'>
                    </div>
                    <h2 className='font-semibold text-10 text-[1.8rem] md:text-[2.5rem] mb-4'>WHO WE ARE</h2>
                    <p className='max-w-[523px] text-justify'>At [Your Fashion Brand], our mission is to revolutionize the fashion industry by offering stylish, high-quality clothing that is kind to the planet and accessible to everyone."</p>
                </div>
                <figure className='grow basis-[250px] sm:max-w-[420px]'>
                    <img src={aboutImg} alt="about us" />
                </figure>
            </section>
            <section className='text-Black flex items-center flex-wrap-reverse py-10 px-[5%] gap-8'>
                <figure className='grow basis-[250px] sm:max-w-[420px]'>
                    <img src={aboutImg} alt="about us" />
                </figure>
                <div className='grow basis-[350px]'>
                    <div className='max-w-[550px] ml-auto w-fit'>
                        <h2 className='font-semibold text-10 text-[1.8rem] md:text-[2.5rem] mb-4'>OUR VISION</h2>
                        <p className='max-w-[523px] text-justify'>At [Your Fashion Brand], our mission is to revolutionize the fashion industry by offering stylish, high-quality clothing that is kind to the planet and accessible to everyone."</p>
                    </div>
                </div>
            </section>
            <section className="text-center px-[5%]">
                <h2 className='font-semibold text-10 text-[1.8rem] md:text-[2.5rem] mb-4'>OUR COLLECTIONS</h2>
                <p className='max-w-[642px] block mx-auto text-base'>At [Your Fashion Brand], our mission is to revolutionize the fashion industry by offering stylish, high-quality clothing that is kind to the planet and accessible to everyone."</p>
                <figure className='h-[317px] overflow-hidden flex items-center mt-8'>
                    <img className='w-full min-h-[100%] object-cover' src={fullImg} alt="collections" />
                </figure>
            </section>
        </div>
    )
}

export default AboutUs;