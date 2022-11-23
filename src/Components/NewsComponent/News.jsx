import React, { useEffect, useState } from 'react'
import NewsItem from '../newsItem/NewsItem'
import "./news.css"
import CircularProgress from '@mui/material/CircularProgress';
export default function News(props) {
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false)
const [category, setCategory] = useState("general");

// apiKey = "57f823bf1d9e487c8e841024c2a5bdb2"
let apiKey = "f138ef5fed654a6a90b8f7171ffa589a"

useEffect(()=>{
  
  if(window.location.pathname=="/general"){
    setCategory("general"); 
    console.log(category)
    setLoading(false)

 }
   if(window.location.pathname=="/business"){
    setCategory("business");
    console.log(category)
    setLoading(false)
 }
   if(window.location.pathname=="/entertainment"){
    setCategory("entertainment");
    console.log(category)
    setLoading(false)
 }
   if(window.location.pathname=="/technology"){
    setCategory("technology");
    console.log(category)
    setLoading(false)
 }
   if(window.location.pathname=="/health"){
    setCategory("health");
    console.log(category)
    setLoading(false)
 }
   if(window.location.pathname=="/science"){
    setCategory("science");
    console.log(category)
    setLoading(false)
 }
   if(window.location.pathname=="/"){
    setCategory("sports");
    console.log(category)
    setLoading(false)
 }

},[category, window.location.pathname])





  const [country, setCountry] = useState("in");
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState();
  let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=20`;

  useEffect(() => {
    fetch(api).
      then((resp) => resp.json()).
      then(resp => {
        setNews(resp.articles)
        setTotal(resp.totalResults)
      }).then(
        setTimeout(()=>{
          setLoading(true)
        }, 3000)
      )

  }, [category, api ,page])


  let totalPages = Math.ceil(total/20);

  const handlePrev = async () => {
      setPage(page - 1);
      setLoading(false)
      console.log(page);
     
  }

  const handleNext = async () => {
      setPage(page + 1);
      setLoading(false)
      console.log(page);
    }

  



  return (
    <>
      <div className="news-box">
        {
          loading ?

          news.map((element) => {
            return (
              <>
                <NewsItem title={element.title} image={element.urlToImage} description={element.description} link={element.url}
                author={element.author} date={element.publishedAt.slice(0,10)} time={element.publishedAt.slice(11,19)}
                />
              </>
            )
          }) : 
         <div className='loader'>
          <div className="loadingText">
          Loading News....
          </div>
         
         <div className="circleContainer">
         <CircularProgress className='circularLoader'  />
         </div>
         </div>
        }
      </div>

      <div className="news-buttons">
        <button disabled={page == 1} onClick={handlePrev} className='buttons'>	&#8592; Previous</button>
        {page}/{totalPages}
        <button  disabled={page == totalPages}   onClick={handleNext} className='buttons'>Next 	&#8594;</button>
      </div>

    </>

  )
}
