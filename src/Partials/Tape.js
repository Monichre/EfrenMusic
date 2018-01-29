import React, { Component } from 'react'

export default class Tape extends Component {
    runTape() {
        const Tape = {
            
            runAnimation: function(){
              var mainWrap = document.getElementById("tape")
              var button = document.getElementsByClassName("tape-btn")[0]
          
            //   button.addEventListener("click", function(e) {
            //     e.preventDefault();
            //     mainWrap.classList.remove("animated");
            //     mainWrap.offsetWidth = mainWrap.offsetWidth;
            //     mainWrap.classList.add("animated");
            //   }, false);
             }
          }
          Tape.runAnimation()
    }
    componentDidMount() {
        this.runTape()
    }
    render() {
        return (
            
            <figure className="mast__img">
                <h1>Pye Luis</h1>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f22de18341361.5603e20265f3a.png"/>
                <h2>Official</h2>
            </figure>
            
        )
    }

}
   
  
