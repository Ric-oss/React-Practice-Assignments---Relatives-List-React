import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
    render() {
        const relativeList = [
            {name:'Mumbai',key:'relativeListItem1'},
            {name:'Pune',key:'relativeListItem2'},
            {name:'Nasik',key:'relativeListItem3'}
        ];
        return(
            <ol type='1' key='relativeList'>
            {
                relativeList.map(relative=>{
                return (
                <li key={relative.key}>{relative.name}</li>
        );
            })
            }
            </ol>
        )    }
}


export default App;
