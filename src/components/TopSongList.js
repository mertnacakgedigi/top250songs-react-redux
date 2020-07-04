import React, { Component } from 'react'


export default class TopSongList extends Component {
    render() {
        const song = this.props.song
        console.log(song.image)
        return (
        <>
            <td style={{fontFamily:"FiraSans", fontSize:"35px",paddingLeft:"40px", width:"80px"}}>{this.props.index}</td>
            <td style={{height:"80px",width:"80px"}}><iframe src={song.image} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{marginTop:"0px"}}></iframe></td>
            <td className="text">{song.name}</td>
            <td className="text">{song.artist}</td>
        </>
              
        )
    }
}
