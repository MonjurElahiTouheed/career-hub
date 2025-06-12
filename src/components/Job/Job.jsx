import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    console.log(logo)
    return (
        <div className="p-10 pr-[155px] border-1 border-[#E8E8E8] rounded-lg">
            <div>
                <img src={logo} alt="" />
            </div>
            <h4 className="font-primary font-extrabold text-2xl text-dark-secondary mt-8">{job_title}</h4>
            <h6 className="font-primary font-extrabold text-xl text-dark-third">{company_name}</h6>
            <div className="mt-4">
                <button className="px-[19px] py-[9px] border-1 border-[#9873FF] rounded-sm">{remote_or_onsite}</button>
                <button className="px-[19px] py-[9px] border-1 border-[#9873FF] rounded-sm ml-4">{job_type}</button>
            </div>
            <div className="flex gap-[27px]">
                <div className="flex items-center gap-2 mt-4 text-dark-third"><HiOutlineLocationMarker size={24} /> <p className="font-primary font-semibold text-xl">{location}</p></div>
                <div className="flex items-center gap-2 mt-4 text-dark-third"><AiOutlineDollar size={24} /> <p className="font-primary font-semibold text-xl">{location}</p></div>
            </div>
            <button></button>
        </div>
    );
};

export default Job;