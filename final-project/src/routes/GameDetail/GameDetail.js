import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Card, Typography } from 'antd';
import {StarOutlined} from '@ant-design/icons';

const { Title } = Typography;
function GameDetail({match}) {
    const [gameData, setGameData] = useState(null)

    const fetchGame = (id) =>{
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then(response =>{
            setGameData(response.data)

        })
        .catch(error =>
            console.log(error.messages))
    }
    
    useEffect(()=>{
        if(gameData === null){
            fetchGame(match.params.id)
        }
        console.log("hehe")
    },[gameData])
    return (
        <div>
            {gameData ?
            <div>
                <div className="site-card-border-less-wrapper" >
                <Card title={(<Title>Game : {gameData.name}</Title>)} style={{boxShadow:" 0 2px 8px 0 black", display:"flex", flexDirection: "column", alignItems: "center", marginTop:"2rem", paddingTop:"2rem" }}>
                    <hr style={{marginTop: "-2rem", marginBottom: "2rem"}}/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div >
                            <img src={gameData.image_url} style={{height: "30rem"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#eeeeee", marginTop: "2rem",boxShadow: "0 2px 8px 0 black", width: "80rem", padding:"3rem"}}>
                    <div>
                        <Title>Detail </Title>
                        <hr/>
                    </div>
                    <div>
                        <h1>Name: {gameData.name}</h1>
                    </div>
                    <div>
                        <h1>Genre: {gameData.genre}</h1>
                    </div>
                    <div>
                        <h1>Singleplayer: {gameData.singlePlayer}</h1>
                    </div>
                    <div>
                        <h1>Mutliplayer: {gameData.multiplayer}</h1>
                    </div>
                    <div>
                        <h1>Platform: {gameData.platform}</h1>
                    </div>
                    <div>
                        <h1>Release:{gameData.release}</h1>
                    </div>
                    </div>
                    </Card>
                </div>
            </div>:
            <h1>loading</h1>}
        </div>
    )
}

export default GameDetail
