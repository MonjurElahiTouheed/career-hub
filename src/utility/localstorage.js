const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applied');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    else {
        return [];
    }
}

const savedJobApplication = id => {

    let storedJobApplications = getStoredJobApplication();
    const exist = storedJobApplications.find(jobId => jobId == id); 
    if(!exist){
        storedJobApplications.push(id);
        // storedJobApplications = [...storedJobApplications, id]; this an immutable way of adding an item to an array
        localStorage.setItem('job-applied', JSON.stringify(storedJobApplications));
    }
}

export { getStoredJobApplication, savedJobApplication };