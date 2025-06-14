import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../utility/localstorage";
import { useEffect } from "react";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length) {
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // another way: using for of
            /* const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if(job) {
                    jobApplied.push(job)
                }
            } */
            console.log(jobs, storedJobIds, jobApplied)
        }
    }, [])
    return (
        <div>
            <h2>apllied joc</h2>
        </div>
    );
};

export default AppliedJobs;