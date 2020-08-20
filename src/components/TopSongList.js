import React, { Component } from 'react'
import Iframe from 'react-iframe'


export default class TopSongList extends Component {
    render() {
        const song = this.props.song
      
        return (
        <>
            <td style={{fontFamily:"FiraSans", fontSize:"35px", textAlign:"center", width:"80px"}}>{this.props.index}</td>      
            <td ><Iframe url={song.image} width="80x" height="80px"></Iframe></td>
            <td className="text">{song.name}</td>
            <td className="text">{song.artist}</td>
        </>
              
        )
    }
}
