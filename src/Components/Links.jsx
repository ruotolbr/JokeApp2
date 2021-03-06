import React from 'react';

function Links(props) {
    return (
        <div className="jokeslinks-contain">
            <h1>Need More Jokes?</h1>
            <p>Check out the funny sites below: </p>
            <ul>
                <li className="jokelink"><a className="link" href="http://www.funnyshortjokes.com">Funny Short Jokes</a></li>
                <li className="jokelink"><a className="link" href="https://www.funny-jokes-quotes-sayings.com/">Funny-Jokes-Quotes-Sayings</a></li>
                <li className="jokelink"><a className="link" href="https://www.thelaughline.com/">The Laughline</a></li>
                <li className="jokelink"><a className="link" href="https://www.super-funny.com/">Super-Funny</a></li>
                <li className="jokelink"><a className="link" href="https://www.laffgaff.com/">LaffGaff</a></li>
                <li className="jokelink"><a className="link" href="http://www.laughfactory.com/jokes/latest-jokes">Laugh Factory</a></li>
            </ul>
        </div>
    );
}

export default Links;
