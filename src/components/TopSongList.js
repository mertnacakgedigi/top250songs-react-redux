import React, { Component } from 'react'

export default class TopSongList extends Component {
    render() {
        const song = this.props.song
        return (<>
            <td>{this.props.index}</td>
            <td>{song.name}</td>
            <td>{song.artist}</td>
               </>
              
        )
    }
}
