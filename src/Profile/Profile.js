import React from 'react'
import propTypes from 'prop-types'

const Profile = (props) => {

    console.log(props)
    return ( 
        <div>
                {props.children}
            
            <p>
                <strong>Full name :</strong> {props.data.fullname}<br/>
                <strong>Bio :</strong> {props.data.bio} <br/>
                <strong>Profession :</strong> {props.data.profession} <br/>
                
            </p>

            <button style={{backgroundColor:"#C40707",border:"transparent",height:"30px",borderRadius:"10px",color:"#fff",cursor:"pointer"}} onClick={()=> props.handleName(props.data.fullname)}>Click me</button>
        </div>
    )
}

Profile.defaultProps={

    fullname:"....",
    bio:".....",
    profession:"....."
}

Profile.propTypes={


    fullname: propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string

}

export default Profile
