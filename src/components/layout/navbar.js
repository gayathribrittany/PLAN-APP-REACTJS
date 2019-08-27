import React from 'react';
import {Link} from 'react-router-dom';
import Signedinlinks from './signedinlinks';
import Signedoutlinks from './signedoutlinks';
import {connect } from 'react-redux'
const Navbar = (props)=>
{ 
    const {auth, profile} = props;
    const links = auth.uid ? <Signedinlinks profile={profile}/>:<Signedoutlinks/>;
    return(
        <nav className="nav-wrapper magenta darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Plan-App</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
   
    return{
          auth:state.firebase.auth,
          profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar) 