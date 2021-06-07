import React from 'react'

class Image extends React.Component{
    render(){
        return(
          <img src={this.props.url} alt={this.props.title}/>  
        )
    }
}

export default Image;

//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg