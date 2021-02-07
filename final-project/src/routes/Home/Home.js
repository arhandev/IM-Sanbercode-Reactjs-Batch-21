import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import {
    Link
  } from 'react-router-dom'
import { Card } from 'antd';
// import './home.css'
import { Carousel } from 'antd';
import { Typography } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: "url('https://images.pexels.com/photos/6151864/pexels-photo-6151864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=1000')",
  };
const contentStyle2 = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: "url('https://images.pexels.com/photos/5368990/pexels-photo-5368990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  };
const contentStyle3 = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: "url('https://images.pexels.com/photos/2574614/pexels-photo-2574614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  };

const { Meta } = Card;
const { Title } = Typography;


function Home() {
    const {film, game} = useContext(DataListContext)
    const [filmData, setFilmData] = film
    const [gameData, setGameData] = game

    const fetchFilm = () =>{
        axios.get("https://backendexample.sanbersy.com/api/data-movie")
        .then(response =>{
            setFilmData(response.data)

        })
        .catch(error =>
            console.log(error.messages))
    }
    const fetchGame = () =>{
        axios.get("https://backendexample.sanbersy.com/api/data-game")
            .then(response =>{
                setGameData(response.data)
                

            })
            .catch(error =>
                console.log(error.messages))
    }
    
    useEffect(()=>{
        if(gameData === null){
            fetchGame()
        }
        if(filmData === null){
            fetchFilm()
        }
    },[filmData, gameData])

    return (
        <div className="home">
            <div className="home-jumbotron">
            <Carousel>
                <div>
                <h3 style={contentStyle}></h3>
                </div>
                <div>
                <h3 style={contentStyle2}></h3>
                </div>
                <div>
                <h3 style={contentStyle3}></h3>
                </div>
            </Carousel>            
            </div>

            
            <div style={{margin: "20px 0"}} className="movie-list">
                <Title>List Movie</Title>
                <div className="movie-section" style={{display: "flex", justifyContent: "space-between"}}>
                    {
                        filmData ? 
                        filmData.slice(0, 4).map(item => (
                            <div className="movie-item" key={item.id}>
                                <Link to={`/movies/${item.id}`}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={item.image_url} style={{height:"20rem"}}/>}
                                    >
                                        <Meta title={item.title} description={`Rating: ${item.rating}.0`} />
                                    </Card>
                                </Link>
                            </div>
                        )):
                        
                        <h1>LOADING</h1>
                    }
                    {
                    filmData &&
                        <div>
                            <Link to={`/movies`}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-right-arrow-icon-png-image_4231911.jpg'} style={{height:"20rem"}} />}
                                        >
                                            <Meta title="View More" description=" View More "/>
                                        </Card>
                                    </Link>
                        </div>
                }
                </div>
            </div>
            <div style={{margin: "20px 0"}}>
            <Title>List Game</Title>
                <div className="movie-section" style={{display: "flex", justifyContent: "space-between"}}>
                {
                    gameData ? 
                    gameData.slice(0, 4).map(item =>(
                        <div key={item.id}>
                            <Link to={`/games/${item.id}`}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={item.image_url} style={{height:"20rem"}} />}
                                        >
                                            <Meta title={item.name} description={`Genre: ${item.genre}`} />
                                        </Card>
                                    </Link>
                        </div>
                    )):
                    <h1>LOADING</h1>
                }
                {
                    gameData &&
                        <div>
                            <Link to={`/games`}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-right-arrow-icon-png-image_4231911.jpg'} style={{height:"20rem"}} />}
                                        >
                                            <Meta title="View More" description=" View More "/>
                                        </Card>
                                    </Link>
                        </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Home
