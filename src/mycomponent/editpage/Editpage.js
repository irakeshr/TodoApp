import React, { useState } from "react";

import "./editpage.css";
export default function Editpage({ editdata,newfun }) {
  const [input, setInput] = useState("");
  const editval = editdata;
  // function editfun(e) {
  //   e.preventDefault();
  // }
  const onhandle = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  return (
    <div className="editpage">
      <div className="form_group">
        <h2>Edit Section</h2>
        <form action="" onSubmit={(e) =>e.preventDefault (newfun(input))}>
          
          <input
            type="text"
            name="edit"
            defaultValue={editval}
            placeholder="Note Here..."
            onChange={onhandle}
          />
          <button>Edit</button>
        </form>
      </div>
    </div>
  );
}
