import React from 'react';
import './Btn.css';

function Btn(props: any) {
    return (
        <div className="BtnStyle">
            <div><i className="fa fa-pause-circle" onClick={props.pause} aria-hidden="true"></i></div>
            <div><i className="fa  fa-play-circle" onClick={props.start} aria-hidden="true"></i></div>
            <div><i className="fa fa-repeat" onClick={props.reset} aria-hidden="true"></i></div>
        </div>
    );
}

export default Btn;
