import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'} p-4  border-transparent rounded-lg`}>
            {props.children}
        </div> 
        
    )
}
