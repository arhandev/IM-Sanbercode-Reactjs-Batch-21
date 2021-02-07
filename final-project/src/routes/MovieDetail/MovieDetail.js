import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Card, Typography } from 'antd';
import {StarOutlined} from '@ant-design/icons';

const { Title } = Typography;


function MovieDetail({match}) {
    const [movieData, setMovieData] = useState(null)

    const fetchMovie = (id) =>{
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then(response =>{
            setMovieData(response.data)

        })
        .catch(error =>
            console.log(error.messages))
    }
    
    useEffect(()=>{
        if(movieData === null){
            fetchMovie(match.params.id)
        }
        console.log("hehe")
    },[movieData])
    return (
        <div>
            {movieData ?
            <div>
                 <div className="site-card-border-less-wrapper" >
                    <Card title={(<Title>Movie: {movieData.title}</Title>)} style={{boxShadow:" 0 2px 8px 0 black", display:"flex", flexDirection: "column", alignItems: "center", marginTop:"2rem", paddingTop:"2rem" }}>
                   <hr style={{marginTop: "-2rem", marginBottom: "2rem"}}/> 
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div >
                            <img src={movieData.image_url} style={{height: "30rem"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#eeeeee", marginTop: "2rem",boxShadow: "0 2px 8px 0 black", width: "80rem", padding:"3rem"}}>
                        <div>
                            <Title>Detail </Title>
                            <hr/>
                        </div>
                        <div>
                            <h1>Description: {movieData.description}</h1>
                        </div>
                        <div>
                            <h1>Year: {movieData.year}</h1>
                        </div>
                        <div>
                            <h1>Duration: {movieData.duration} minutes</h1>
                        </div>
                        <div>
                            <h1>Genre: {movieData.genre}</h1>
                        </div>
                        <div>
                            <h1>Rating: {movieData.rating}.0 <StarOutlined /></h1>
                        </div>
                        <div>
                            <h1>Review: {movieData.review} </h1>
                        </div>
                    </div>
                    </Card>
                </div>
            </div>:
            <h1>loading</h1>}
        </div>
    )
}

export default MovieDetail
