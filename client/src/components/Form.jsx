import React, { useState } from "react"
import axios from "axios";

const Form = ({ onFormSubmit }) => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/pokemon", { name, type })
      .then(res => {
        setName("");
        setType("");
        onFormSubmit(res.data);
      })
      .catch(e => alert(e));
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={(e) => setType(e.target.value)} value={type} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
