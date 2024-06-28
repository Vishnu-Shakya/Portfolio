import React from 'react';
import "./works.css"
import Portfolio1 from "../../assets/portfolio-6.png"
import airline from '../../assets/airline.png'
import chat from '../../assets/chat.png'
import columpus from '../../assets/columpus.png'

function Works() {
  const handleClick=(url)=>{
    console.log(url);
    window.location.href = url;
  }
  return (
    <section className="works">
       <h2 className="worksTitle">My Portfolio</h2>
       {/* <span className="worksDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias saepe magni aperiam qui, atque incidunt. Eius explicabo quos quas saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi eius accusantium consequatur iste et consequuntur earum ipsam tempore asperiores!</span> */}
       <div className="worksImgs">
          <img src={airline} alt="" className="worksImg" onClick={()=>handleClick("https://github.com/Vishnu-Shakya/AirLine-Management")} />
          <img src={chat} alt="" className="worksImg"  onClick={()=>handleClick("https://github.com/Vishnu-Shakya/whatapp_clone")}/>
          <img src={columpus} alt="" className="worksImg" onClick={()=>handleClick("https://github.com/kvineet002/Kriti2024")} />
          {/* <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" /> */}
       </div>
    </section>
  )
}

export default Works