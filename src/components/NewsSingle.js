import React from "react";

const NewsSingle = ({item}) => {    
    <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src={item.utlToImage} alt={item.title}/>
        <span class="card-title">{item.resourec.name}</span>
      <div class="card-content">
        <p>{item.title}</p>
      </div>
      <div class="card-action">
        <a href="{item.url}" target="_blank" rel='noreferrer'>Full Article</a>
      </div>
    </div>
  </div></div>
};

export default NewsSingle;