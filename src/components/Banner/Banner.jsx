import Button from "../Layout/Button";
import Container from "../Layout/Container";
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <section className="pt-[156px] bg-linear-to-r from-[#7E90FE]/5 to-[#9873FF]/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h1 className="font-primary font-extrabold text-[80px] text-dark-primary w-[570px] leading-[100px]">One Step Closer To Your <span className="text-transparent bg-clip-text bg-linear-to-r from-gradinet-from to-gradinet-to">Dream Job</span></h1>
                        <p className="mt-4 font-primary font-medium text-lg text-dark-third w-[519px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Button className='px-7 py-[19px] rounded-lg mt-8'>Get Started</Button>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;