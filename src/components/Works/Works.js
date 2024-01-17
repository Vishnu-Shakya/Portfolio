import React from 'react';
import "./works.css"
import Portfolio1 from "../../assets/portfolio-6.png"
function Works() {
  return (
    <section className="works">
       <h2 className="worksTitle">My Portfolio</h2>
       <span className="worksDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe magni aperiam qui, atque incidunt. Eius explicabo quos quas saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi eius accusantium consequatur iste et consequuntur earum ipsam tempore asperiores!</span>
       <div className="worksImgs">
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
       </div>
       <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works