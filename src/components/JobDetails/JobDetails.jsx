import { useLoaderData, useParams } from "react-router";
import Container from "../Layout/Container";
import { toast, ToastContainer } from "react-toastify";
import { savedJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () => {
        savedJobApplication(idInt);
        toast('Applied job successfully');
    }

    return (
        <div>
            <h2>job details : {job.id}</h2>
            <Container>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-3 border-1 border-black">
                        <h2>Details coming here</h2>
                    </div>
                    <div className="border-1 border-black">
                        <h2>side thigns</h2>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
            </Container>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;