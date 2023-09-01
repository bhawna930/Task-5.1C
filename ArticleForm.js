import React, { useState } from 'react';
import './ArticleForm.css'; 



function ArticleForm() {

  const [title, setTitle] = useState('');

  const [abstract, setAbstract] = useState('');

  const [articleText, setArticleText] = useState('');

  const [tag, setTag] = useState('');



  const handleTagChange = (value) => {

    setTag(value);

  };



  const handlePostArticle = () => {

    

    console.log({ title, abstract, articleText, tag });

  };



  return (

    <div>

      <div>

        <input

          type="text"

          placeholder="Enter a descriptive title"

          value={title}

          onChange={(e) => setTitle(e.target.value)}

          className="input-field" 

        />

      </div>

      <div>

        <textarea

          placeholder="Enter a 1-paragraph abstract"

          value={abstract}

          onChange={(e) => setAbstract(e.target.value)}

          className="text-area" 

        />

      </div>

      <div>

        <textarea

          placeholder="Enter a 1-paragraph abstract"

          value={articleText}

          onChange={(e) => setArticleText(e.target.value)}

          className="text-area" 

        />

      </div>

      <div>

        <input

          type="text"

          placeholder="Please add up to 3 tags to describe what your Article is about e.g., java"

          value={tag}

          onChange={(e) => handleTagChange(e.target.value)}

          className="input-field" 

        />

      </div>

      <div>

        <button onClick={handlePostArticle}>POST</button>

      </div>

    </div>

  );

}



export default ArticleForm;


