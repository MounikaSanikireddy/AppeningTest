import React, { useEffect, useState } from 'react'
function Home()
{
  let [data, setData] = useState(null)
  let [edit, setEdit] = useState({
    id: "",
    isEdit: false,
  })
  let [text, Setmessage] = useState({
    id: "",
    message: "",
  })
  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
        localStorage.setItem("data", JSON.stringify(jsonData))
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) =>{
    let newData=data.filter((item)=>{
      return item.id !== id 
    })
    setData(newData)
  }
  const ChandleEdit = (e, id) =>
  {
    e.preventDefault();
    let filterData = data.find((item) =>
    {
      return item.id === id
    })
    Setmessage({
      id: id,
      message: filterData.title
    })
    setEdit({
      id: id,
      isEdit: true,
    })
  }
  let handleChange=(e)=>{
    Setmessage({
      id:edit.id,
      message:e.target.value
    })
  }
  let handleAdd=(e)=>{
   alert("we are able add the user")
  }
  let ChangeEdit = (e) =>
  {
    e.preventDefault();
    let newData = data.map((eachItem) =>
    {
      if (eachItem.id === edit.id)
      {
        return {
            id:text.id,
            title:text.message
        }
      }else{
        return eachItem;
      }
    })
    setData(newData);
    Setmessage({
      id:"",
      message:""
    })
    setEdit({
      id:"",
      isEdit:false
    })
  }
  return (
    <div>
      <div style={{ margin: "50px", marginLeft: "550px" }}>
        <input type='text' value={text.message} onChange={(e)=>handleChange(e)} style={{width:"500px"}}/>
        {edit.isEdit ? <button onClick={(e) => ChangeEdit(e)} className='btn btn-success' style={{ margin: "20px" }}>Edit</button> : <button onClick={(e)=>handleAdd(e)} className='btn btn-success' style={{ margin: "20px" }}>ADD</button>}
      </div>
      {data ? (
        <ul style={{width:"75%"}}>
          {data.map((item) =>
          {
            return (
                    <li key={item.id}>
                      {item.title}
                      <div style={{ marginLeft: "800px" }}>
                        <button className='btn btn-success' style={{ margin: "20px" }} onClick={(e) => ChandleEdit(e, item.id)}>Edit</button>
                        <button className='btn btn-danger'><p style={{ margin: "0px" }} onClick={() => handleDelete(item.id)} >DELETE</p></button>
                      </div>
                      < hr />
                    </li>
            )

          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

    </div>)
}


export default Home
