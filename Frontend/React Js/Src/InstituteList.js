function InstituteList({ institute, deleteInstitute, editInstitute }) {
    return (
        <table className='table m-3 '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Fee</th>
                    <th>Duration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    institute.map((data) => (
                        <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.course}</td>
                            <td>{data.fee}</td>
                            <td>{data.duration}</td>
                            <td>
                                <button className='btn btn-primary m-1' onClick={() => editInstitute(data)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => deleteInstitute(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )



};

export default InstituteList;
