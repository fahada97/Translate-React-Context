import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../Contexts/LanguageContext";
import ColorContext from "../Contexts/ColorContext";

class App extends React.Component{
    state = {language: 'english'}

    onLanguageChange = language => {
        this.setState({ language: language })
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a language: 
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={()=>this.onLanguageChange('urdu')} />
                </div>
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value ={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;