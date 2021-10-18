 import React from 'react';
 import './StuckImplementing.scss';
//  import { ReactComponent as Discord } from 'assets/Github.svg';
 import Discord from 'assets/discord_black2.jpeg';

 const StuckImplementing = () => {
    const askUrl = '';
    const talkUrl = '';
    return (
        <div className="StuckImplementing">
            <div className="StuckImplementing__intro">
                <h2>Stuck implemeting Tellor?</h2>
            </div>
            <div className="StuckImplementing__actions horizontal_btns">
                <button  size="large" className="bigbutton  blackbutton fxw" onClick={() => window.open(askUrl)}>
                    ask the community *
                </button>
                <button  size="large" className="bigbutton  blackbutton fxw" onClick={() => window.open(talkUrl)}>
                    {/* <Discord className="icon" /> */}
                    <img src={Discord} alt="Discord"/>
                    talk to the team
                </button>
            </div>
        </div>    
    )
}

 export default StuckImplementing;