import React from 'react'
import "../App.css"
import PropertyData from '../components/PropertyDetails/PropertyData';
import PropertyNameLocationPrice from '../components/PropertyDetails/PropertyNameLocationPrice';
import OtherServices from '../components/OtherServices';
import OthersNearbyProperties from '../components/PropertyDetails/OthersNearbyProperties';
import Amenities from '../components/PropertyDetails/Amenities';

const PropertyDetails = () => {
    return (
        <>
            <PropertyNameLocationPrice />
            <PropertyData />
            <Amenities />
            <OtherServices />
            <OthersNearbyProperties />
        </>
    )
}

export default PropertyDetails
