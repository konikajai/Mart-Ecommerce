import React from 'react'
import { IonIcon } from '@ionic/react'

const card = {
    height: '12rem',
}
const icon = {
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
            <div className='container'>
                <div className="row mt-5 mb-3 justify-content-center">
                    {serviceData.map((data, index) => (
                        <div key={index} className="col-md-3 col-sm-12 mb-3">
                            <div style={{ ...card, backgroundColor: data.bg }} className="card text-center border-0 rounded-0">
                                <center>
                                    <div style={icon} className='mt-3'>
                                        <IonIcon icon={data.icon} className='mt-1' style={{ fontSize: '24px', color: '#000' }} />
                                    </div>
                                </center>
                                <div className="card-body mt-4">
                                    <h6 className="card-title">{data.title}</h6>
                                    <p className="card-text">{data.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services