import React from 'react'
import "./NewsItems.css"

export default function NewsItem(props) {
  return (
<>
<div className="newsitem">
    <div className="container">
       <img src={props.image} alt="Loading Image" />
       <h5> {props.title}</h5>
       <p>{props.description}</p>
       <div className="bottom">
       <button  className='button'>Read More</button>
      <div className='info' > 
      <div>{props.author}</div>
       <div>{props.date}</div>
       <div>{props.time}</div>
       </div>
       </div>

    </div>
</div>
</>
  )
}

