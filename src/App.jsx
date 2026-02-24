import React, { useState } from 'react'
import AddDetailsCard from '../src/components/card/AddDetailsCard';
import DisplayDetailsCard from "../src/components/card/DisplayDetailsCard";
import { GenerateJson } from './components/card/GenerateJson';
import './App.css'

function App() {


  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddDetails = (newDetails) => {
    setData([...data, newDetails])
  }

  const handleUpdateDetails = (updatedDetails) => {

    const updatedData = [...data];
    updatedData[editIndex] = updatedDetails;
    setData(updatedData);
    setEditIndex(null);
  }

  const handleDeleteDetails = (indexToDelete) => {
    const updatedData = data.filter((item, index) => index !== indexToDelete);

    setData(updatedData);

    if (editIndex === indexToDelete) {
      setEditIndex(null);
    }
  }

  return (
    <div className='container-fluid'>
      <AddDetailsCard sendData={handleAddDetails} updateData={handleUpdateDetails} editIndex={editIndex} details={data} />
      <DisplayDetailsCard details={data} setEditIndex={setEditIndex} deleteData={handleDeleteDetails} />
      <GenerateJson details={data}/>
    </div>
  )
}

export default App
