import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../Layout/Button";
import { Link } from "react-router";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    console.log(typeof id);
    return (
        <div className="py-10 pl-10 border-1 border-[#E8E8E8] rounded-lg">
            <div>
                <img src={logo} alt="#logo" />
            </div>
            <h4 className="font-primary font-extrabold text-2xl text-dark-secondary mt-8">{job_title}</h4>
            <h6 className="font-primary font-extrabold text-xl text-dark-third mt-2">{company_name}</h6>
            <div className="mt-4">
                <button className="px-[19px] py-[9px] border-1 border-[#9873FF] rounded-sm">{remote_or_onsite}</button>
                <button className="px-[19px] py-[9px] border-1 border-[#9873FF] rounded-sm ml-4">{job_type}</button>
            </div>
            <div className="flex gap-[27px] mt-4">
                <div className="flex items-center gap-2 mt-4 text-dark-third"><HiOutlineLocationMarker size={24} /> <p className="font-primary font-semibold text-xl">{location}</p></div>
                <div className="flex items-center gap-2 mt-4 text-dark-third"><AiOutlineDollar size={24} /> <p className="font-primary font-semibold text-xl">Salary: {salary}</p></div>
            </div>
            <Link to={`/job/${id}`}><Button className='px-4.5 py-[11px] rounded-sm mt-6'>View Details</Button></Link>
        </div>
    );
};

export default Job;