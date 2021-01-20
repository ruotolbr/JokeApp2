import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

function LikedJokesButton(props) {
    let history =useHistory();
function handleClick(){
    history.push('/likes')
}
    return (
        <div>
         <Link to='/likes' exact path component={LikedJokesButton}/>   
         
        </div>
    );
}

export default LikedJokesButton;