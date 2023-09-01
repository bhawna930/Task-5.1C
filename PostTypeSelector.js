import React from 'react';


function PostTypeSelector({ postType, setPostType }) {

  return (

    <div>

      <label>

        <input

          type="radio"

          value="question"

          checked={postType === 'question'}

          onChange={() => setPostType('question')}

        />

        Question

      </label>

      <label>

        <input

          type="radio"

          value="article"

          checked={postType === 'article'}

          onChange={() => setPostType('article')}

        />

        Article

      </label>

    </div>

  );

}



export default PostTypeSelector;


