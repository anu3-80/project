import React from "react";
import InstituteList from "./InstituteList";
import { deleteData, getData, putData, postData } from './api';
import { useEffect, useState } from 'react';
import InstituteForm from "./Form";
import './index.css';

const App = () => {
    const [institute, setInstitutes] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [initialForm, setForm] = useState({ id:'',name: '', course: '', fee: '',duration:''})
    useEffect(() => {
        getAllInstitute();
    }, [])

    async function getAllInstitute() {
        const response = await getData();
        setInstitutes(response.data);
    }
    async function addInstitute(institute) {
        let data = {
            id:institute.id,
            name: institute.name,
            course: institute.course,
            fee: institute.fee,
            duration:institute.duration
        }
        if (edit)
            await putData(institute.id, data);
        else
            await postData(data);
        getAllInstitute();
        setOpenForm(false);


    }
    async function deleteInstitute(id) {
        await deleteData(id);
        getAllInstitute();
    }

    function editInstitute(value) {
        setEdit(true);
        setOpenForm(true);
        setForm(value)

    }
    function closeForm() {
        setOpenForm(false)
    }
    function showForm() {
        setForm({ id:'',name: '', course: '', fee: '',duration:'' })
        setOpenForm(true);
        setEdit(false);

    }

    return (

        <div className="wrapper m-5 w-50">
            <h2 className="text-primary text-center">List Of Institutes Using React Js</h2>
            <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add new</button>
            <InstituteList institute={institute} deleteInstitute={deleteInstitute} editInstitute={editInstitute}></InstituteList>
            {openForm && <InstituteForm addInstitute={addInstitute} data={initialForm} closeForm={closeForm}  ></InstituteForm>}
        </div>
        
    )

};

export default App;

