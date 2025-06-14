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

    
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(jobId => jobId == id);
    if(!exist){
        storedJobApplication.push(id);
        localStorage.setItem('job-applied', JSON.stringify(storedJobApplication));
    }
}


export { getStoredJobApplication, savedJobApplication };