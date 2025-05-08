import React from 'react'
import Carousal1 from "../../assets/landingPage/Services/Carousal1.jpg"
import ImageCarousal from '../../components/ImageCarousal'


function Services() {

    const carousal = [
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
        Carousal1,
    ]

    return(
        <>
        <div className='container mx-auto overflow-hidden'>
            <div className='h-screen mx-10'>
                <div className='my-32'>
                    <ImageCarousal carousal={carousal}/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Services