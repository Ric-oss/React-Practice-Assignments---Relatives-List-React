import React, {Component, useState} from "react";
import '../styles/App.css';

//const relative=[{name:"mama"},{name:"masi"},{name:"chacha"}];
class App extends Component {
 relative=[{name:"mama"},{name:"masi"},{name:"chacha"}];

  listitem = this.relative.map((value,index)=>{
      return <li key={index}>{value.name}</li>
  })

    render() {

        return(
            <div id="main">
                <ol>{this.listitem}</ol>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
