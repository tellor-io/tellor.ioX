 import React from 'react';
 import './StuckImplementing.scss'
 import Discord from 'assets/Discord2.svg';

 const StuckImplementing = () => {

    const askUrl = 'https://discord.com/channels/461602746336935936/461602746336935938';
    const talkUrl = 'https://discord.com/channels/461602746336935936/695303398991462420';

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
                    <img src={Discord} alt="Discord"/>
                    talk to the team
                </button>
            </div>
        </div>    
    )
}

 export default StuckImplementing;