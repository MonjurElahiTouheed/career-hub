
const Job = ({job}) => {
    const {logo} = job;
    console.log(logo)
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Job;