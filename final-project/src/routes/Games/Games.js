import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import {
    Link
  } from 'react-router-dom'
import { Card } from 'antd';
import { Typography } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

function Games() {
    const {game} = useContext(DataListContext)
    const [gameData, setGameData] = game

    const fetchFilm = () =>{
        axios.get("https://backendexample.sanbersy.com/api/data-game")
        .then(response =>{
            setGameData(response.data)

        })
        .catch(error =>
            console.log(error.messages))
    }

    useEffect(()=>{
        if(gameData === null){
            fetchFilm()
        }
    },[gameData])

    const getList = (data) => {
        if(data){
        var out=[];
        var count = 0;
        for (let i = 0; i < data.length; i += 5) {
          out[count] = data.slice(i, i + 5);
          count++;
        }
        return out;}
        return null
      };

    const data = getList(gameData);


    return (
        <div style={{margin: "20px"}}>
            <Title>LIST MOVIE</Title>
            {
                data ? 
                data.map(row => (
                    <div style={{display:"flex", justifyContent: "flex-start", margin: "20px 0"}}>
                        {
                            row.map(item=>(
                                <div key={item.id} style={{margin: "0 1rem"}}>
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
                                )
                            )
                        }

                    </div>

                )):

                <h1>LOADING</h1>
            }
        </div>
    )
}

export default Games
