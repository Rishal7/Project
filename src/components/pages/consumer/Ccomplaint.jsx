import React, { useState } from "react";
import Cnavbar from "../../Cnavbar";
import "../form.css";

function Ccomplaint() {
  const [sackNumber, setSackNumber] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission
  }
  return (
    <div>
      <Cnavbar />
      <div className="container">
        <h2 className="text-center px-8">File a Complaint</h2>
        <form className="pt-10" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="sackNumber">Sack Number</label>
            <input
              type="text"
              id="sackNumber"
              value={sackNumber}
              onChange={(event) => setSackNumber(event.target.value)}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Ccomplaint;
