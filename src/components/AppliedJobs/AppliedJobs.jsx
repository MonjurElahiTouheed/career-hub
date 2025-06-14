import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../utility/localstorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
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
            setAppliedJobs(jobApplied)
            setDisplayJobs(jobApplied)
        }
    }, [jobs])


    const handleFilterBtn = filter => {
        /* if(filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        } */

        // switch case method
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
        switch (filter) {
            case 'all':
                return setDisplayJobs(appliedJobs);
            case 'remote':
                return setDisplayJobs(remoteJobs);
            case 'onsite':
                return setDisplayJobs(onsiteJobs);
            default:
                return setDisplayJobs(appliedJobs);
        }
    }
    return (
        <div>
            <h2 className="text-6xl">My applied jobs: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() =>  handleFilterBtn('all') }><a>All</a></li>
                    <li onClick={() =>  handleFilterBtn('remote') }><a>Remote</a></li>
                    <li onClick={() =>  handleFilterBtn('onsite') }><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>{job.job_title} {job.company_name}: {job.remote_or_onsite}</li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;