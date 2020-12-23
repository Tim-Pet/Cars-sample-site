import React from 'react'

const Spacer = (props) => {
    const spaceStyle = {
        height: props.height,
        
      };
    return (
        <div style={spaceStyle}>
            <br />
        </div>
    )
}

export default Spacer
