import React, { useState } from "react";

function Form() {
  const [formData, setformData] = useState({
        firstName: 'John',
        lastName: 'Henry',
        admin: false,
      
  })

   
function handlechange(event) {
  const name = event.target.name;
  let value = event.target.value;
  if (event.target.type === 'checkbox') {
    value = event.target.checked;
  }

  setformData({
    ...FormData,
      [name]: value,
    })

}
function handleSubmit(event) {
  event.preventdefault();
  console.log(formData);

}
  return (
    <form>
      <input type="text" name="firstName" onChange={handlechange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handlechange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handlechange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}


export default Form;
