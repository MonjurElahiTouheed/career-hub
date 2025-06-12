import { useEffect, useState } from "react";
import SectionDescription from "../Layout/SectionDescription";
import SectionHeading from "../Layout/SectionHeading";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <SectionHeading>Featured Jobs: {jobs.length}</SectionHeading>
            <SectionDescription>Explore thousands of job opportunities with all the information you need. Its your future</SectionDescription>
            <div>
                {
                    jobs.map((job) => <Job key={job.id} job={job} ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;