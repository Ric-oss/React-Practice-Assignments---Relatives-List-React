import React, {Component, useState} from "react";
import '../styles/App.css';

//const relative=[{name:"mama"},{name:"masi"},{name:"chacha"}];
class App extends Component {
 relative=[{key:"relativeListItem1",name:"mama"},{key:"relativeListItem2",name:"masi"},{key:"relativeListItem1",name:"chacha"}];

  listitem = this.relative.map((value)=>{
      return <li key={value.key}>{value.name}</li>
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
