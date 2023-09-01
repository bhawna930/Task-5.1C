import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector';

import QuestionForm from './QuestionForm';

import ArticleForm from './ArticleForm';

import './PostPage.css'; 



function PostPage() {

  const [postType, setPostType] = useState('');



  return (

    <div>

      <p1>NEW POST</p1>

      <p>Select Post Type</p>

      <PostTypeSelector postType={postType} setPostType={setPostType} />

      {postType === 'question' ? <QuestionForm /> : null}

      {postType === 'article' ? <ArticleForm /> : null}

    </div>

  );

}



export default PostPage;


