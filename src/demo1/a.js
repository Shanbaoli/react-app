import React from 'react';
function MyTile(){
    return(
        <h1>现在的时间：{new Date().toLocaleTimeString()}</h1>
    )
}

export default MyTile