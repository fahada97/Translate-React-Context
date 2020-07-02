import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import ColorContext from "../Contexts/ColorContext";

class Button extends React.Component{
    //static contextType = LanguageContext; NOT NEEDED WHEN USING CONSUMER

    renderSubmit(language) {
        return language==='english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language})=>this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>   
        )
    }

    render(){
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; NOT NEEDED
        return(
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}    
            </ColorContext.Consumer>
        )
    }
}

export default Button;