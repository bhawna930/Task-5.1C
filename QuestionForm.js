import React, { useState } from 'react';
import './QuestionForm.css'; 

function QuestionForm() {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [tag, setTag] = useState('');



  const handleTagChange = (value) => {

    setTag(value);

  };



  const handlePostQuestion = () => {

    

    console.log({ title, description, tag });

  };



  return (

    <div>

      <div>

        <input

          type="text"

          placeholder="Start your question with how, what, why, etc."

          value={title}

          onChange={(e) => setTitle(e.target.value)}

          className="input-field" 

        />

      </div>

      <div>

        <textarea

          placeholder="Description"

          value={description}

          onChange={(e) => setDescription(e.target.value)}

          className="text-area" 

        />

      </div>

      <div>

        <input

          type="text"

          placeholder="Please add up to 3 tags to describe what your Question is about e.g., java "

          value={tag}

          onChange={(e) => handleTagChange(e.target.value)}

          className="input-field" 

        />

      </div>

      <div>

        <button onClick={handlePostQuestion}>POST</button>

      </div>

    </div>

  );

}



export default QuestionForm;


