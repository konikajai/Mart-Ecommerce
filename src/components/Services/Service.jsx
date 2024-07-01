import React from 'react'
import { IonIcon } from '@ionic/react'

const div={
    paddingLeft:'140px'
}
const card = {
    width: '16rem',
    height: '12rem',
}
const icon ={
    width: '35px',
    height: '35px',
    backgroundColor: 'white',
    borderRadius: '50%',
}
function Services(props) {
    // console.log(props.serviceData.icon)
    const { serviceData } = props
    return (
        <>
            <div style={div} className="row row-cols-md-3 mt-5 mb-3 w-100">
                {serviceData.map((data, index) => (
                    <div key={index} style={{ ...card, backgroundColor: data.bg }} className="card text-center ms-3 border-0 rounded-0">
                        <center>
                            <div style={icon} className='mt-3'>
                            <IonIcon icon={data.icon} className='mt-1' style={{ fontSize: '24px', color: '#000' }}/>
                            </div>
                        </center>
                        <div class="card-body mt-4">
                            <h6 class="card-title">{data.title}</h6>
                            <p class="card-text">{data.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services