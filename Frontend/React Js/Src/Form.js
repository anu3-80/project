import { useState } from "react";
function Form(props) {

    const [institute, setInstitutes] = useState(props.data);
    const [submitted, setSubmitted] = useState(false)

    let changeFormData = (event) => {
        const { name, value } = event.target;
        setInstitutes({ ...institute, [name]: value })
    }
    return (
        
        <div className="form-overlay">
            <form>
            <div className="form-group">
                    <label>Id:</label>
                    <input className="form-control mt-2"
                        type="text" name="id" placeholder="Enter Id"
                        value={institute.id}

                        onChange={changeFormData}/>

                    {
                        submitted && institute.id === "" && <span className="text-danger">Enter Valid Id</span>
                    }
                    </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2" value={institute.name} type="text" name="name" placeholder="Enter Institute Name"
                        onChange={changeFormData} />
                    {
                        submitted && institute.name.length < 5 && <span className="text-danger">institute name must be 5 charecters</span>
                    }

                </div>
                <div className="form-group">
                    <label>Course:</label>
                    <select className="form-control mt-2" name="course" value={institute.course} onChange={changeFormData}>
                    <option value='-1'></option>
                        <option value={'java'}>Java Full Stack</option>
                        <option value={'python'}>Python Full Stack</option>
                        <option value={'aws'}>AWS</option>
                        <option value={'devops'}>Devops</option>
                        <option value={'.net'}>.Net</option>
                        <option value={'react'}>React</option>
                        <option value={'angular'}>Angular</option>
                        <option value={'Sql'}>SQL</option>
                        <option value={'cyber security'}>Cyber Security</option>
                        <option value={'data science'}>Data Science</option>
                        <option value={'aws devops'}>Aws Devops</option>
                        <option value={'Azure devops'}>Azure Devops</option>
                        <option value={'multi cloud'}>Multi Cloud</option>
                        <option value={'Testing Tools'}>Testing Tools</option>
                        <option value={'selenium'}>Selenium</option>
                        <option value={'eli testing'}>ELI Testing</option>
                        <option value={'Git'}>Git Hub</option>
                        <option value={'Ms Azure'}>MS Azure</option>
                        <option value={'web'}>Full Stack Web Development</option>
                    </select>
                    {
                        submitted && institute.course === "" && <span className="text-danger">institute Course required</span>
                    }
                </div>
                <div className="form-group">
                    <label>Fee:</label>
                    <input className="form-control mt-2"
                        type="text" name="fee" placeholder="Enter fee"
                        value={institute.fee}

                        onChange={changeFormData}/>

                    {
                        submitted && institute.fee === "" && <span className="text-danger">Enter Valid Amount</span>
                    }
                </div>
                {/* <div className="form-group">
                    <label>Attendance:</label>
                    <input className="form-control mt-2" 
                        type="text" name="attendance" 
                        value={institute.attendance}

                        onChange={changeFormData}/>

                    {
                        sumitted && institute.attendance === "" && <span className="text-danger">Attendance me be above 50%</span>
                    }
                </div> */}
                <div className="form-group">
                    <label>Duration:</label>
                    <input className="form-control mt-2"
                        type="text" name="duration" 
                        value={institute.duration}

                        onChange={changeFormData}/>

                    {
                        submitted && institute.duration === "" && <span className="text-danger">Duration must be above 2 months</span>
                    }
                </div>
                {/* <div className="form-group">
                    <label>Placement:</label>
                    <select className="form-control mt-2" 
                        // type="text" name="placement" placeholder="Enter fee"
                        value={institute.placement}

                        onChange={changeFormData}>
                            <option value='-1'></option>
                        <option value={'yes'}>Placement</option>
                        <option value={'no'}>No Placement</option>

                    </select>

                    {
                        sumitted && institute.placement === "" && <span className="text-danger">Above 70% attendance there provide placement</span>
                    }
                </div> */}

                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault();
                        if (!!institute.name && !!institute.course && !!institute.fee && !!institute.duration) {
                            props.addInstitute(institute)
                        }



                    }}

                >Send</button>
                <button className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault();
                        props.closeForm()


                    }}
                >Cancel</button>

            </form>

        </div>
    )
}


export default Form