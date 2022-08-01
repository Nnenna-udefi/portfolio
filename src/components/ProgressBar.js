import React from 'react'

 const ProgressBar = (props) => {
        const {bgcolor, completed } = props;
    
        const containerStyles = {
          height: 30,
          width: '100%',
          backgroundColor: '#D3DCF8',
          margin: 50,
          borderRadius: 5

        }
        const fillerStyles = {
          height: '100%',
          width: `${completed}%`,
          backgroundColor: bgcolor,
          textAlign: 'right',
          borderRadius: 5
        }
        const labelStyles = {
          padding: 5,
          color: 'white',
          fontWeight: 'bold'
        }
      
  return (
    <div style={containerStyles}>
    <div style={fillerStyles}>
      <span style={labelStyles}>{`${completed}%`}</span>
    </div>
  </div>
  )
}

export default ProgressBar