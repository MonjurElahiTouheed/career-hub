import Button from "../Layout/Button";
import Container from "../Layout/Container";

const Banner = () => {
    return (
        <section className="pt-[41px]">
            <Container>
                <div className="flex">
                    <div>
                        <h1 className="font-primary font-extrabold text-[80px] text-dark-primary w-[570px]">One Step Closer To Your <span className="text-transparent bg-clip-text bg-linear-to-r from-gradinet-from to-gradinet-to">Dream Job</span></h1>
                        <p className="mt-4 font-primary font-medium text-lg text-dark-third w-[519px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Button className='px-7 py-[19px] rounded-lg mt-8'>Get Started</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;