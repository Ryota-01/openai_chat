import React, { useState } from 'react'

export default function FormSection() {
  const [newQuestion, setNewQuestion] = useState<string>("");
  console.log("test");
  
  return (
    <div>
      <textarea
        className="form-control"
        placeholder="Ask me anyting"
        cols={30}
        rows={20}
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button
        className='btn'
        // onClick={() => console.log("onClick Here!!!")}
        
      >Generate Response</button>
    </div>

  )
}