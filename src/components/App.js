import React, {Component, useState} from "react";
import '../styles/App.css';

//const relative=[{name:"mama"},{name:"masi"},{name:"chacha"}];
class App extends Component {
 relative=[{id:1,name:"mama"},{id:2,name:"masi"},{id:3,name:"chacha"}];

  listitem = this.relative.map((value)=>{
      return <li key={value.id}>{value.name}</li>
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
