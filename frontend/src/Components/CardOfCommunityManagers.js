import React from 'react'
import '../styles/cardOfCommunityManagers.css';

export default function CardCommunityMembers(props) {
  return (

      <div className="CommunityManagersCard">

        <div className="managers-img">
          <img src={props.memberImageSrc} alt="" />
        </div>

        <div className="managersName">
          {props.memberName}
        </div>

        <div className="designation">
          {props.designation}
        </div>


    </div>

  )
}
