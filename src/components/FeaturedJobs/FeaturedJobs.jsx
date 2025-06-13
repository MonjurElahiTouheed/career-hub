import { useEffect, useState } from "react";
import SectionDescription from "../Layout/SectionDescription";
import SectionHeading from "../Layout/SectionHeading";
import Job from "../Job/Job";
import Container from "../Layout/Container";
import Button from "../Layout/Button";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <section className="my-[130px]">
            <Container>
                <SectionHeading>Featured Jobs: {jobs.length}</SectionHeading>
                <SectionDescription>Explore thousands of job opportunities with all the information you need. Its your future</SectionDescription>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {
                        jobs.map((job) => <Job key={job.id} job={job} ></Job>)
                    }
                </div>
                <div className="text-center">
                    <Button className='px-7 py-[19px] rounded-lg mt-10'>Show All Jobs</Button>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedJobs;