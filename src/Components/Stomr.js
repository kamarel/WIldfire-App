import React from 'react'
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Storm = ({lat, lng,onClick}) => {
    return (
        <div className="location-maker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon"/>
        </div>
    )
}

export default Storm
