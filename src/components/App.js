import React, { Component, useState } from "react";
import '../styles/App.css';

//const relative=[{name:"mama"},{name:"masi"},{name:"chacha"}];
class App extends Component {


    render() {
        const relative = [{ key: "relativeListItem1", name: "mama" },
        { key: "relativeListItem2", name: "masi" },
        { key: "relativeListItem3", name: "chacha" }];

        return (
            <div id="main">
                <ol type="1" key="relative">

                    {relative.map((value) => {
                        return (
                            <li key={value.key}>{value.name}</li>);
                    })
                    }
                </ol>
                {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
