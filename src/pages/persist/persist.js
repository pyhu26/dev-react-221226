import React, { useEffect } from 'react';

export default function Persist(){
    const [index,setIndex] = React.useState(0);

    const firstComponent = require("../dynamic/" + "page1").default;
    const secondComponent = require("../dynamic/" + "page2").default;
    const [tabs, setTabs] = React.useState([firstComponent, secondComponent]);

    React.useEffect(()=>{
        
      console.log("mounted");

      return()=>{

          console.log("unmounted");
      }
    },[]);

    React.useEffect(() => {

        console.log("updated");

        // console.log(tabs[index]);
        //setTabs(newArray);

        const itemName = "Page" + (index + 1);

        console.log("열어본 페이지");

        // console.log(window.sessionStorage.getItem(itemName));

        // const newTabs = tabs.map((t,i)=>{
        //     if (window.sessionStorage.getItem(itemName) === undefined)
        //     {
        //         return t; //JSON.parse(window.sessionStorage.getItem(itemName));
        //     }
        //     else 
        //     {
        //         return (JSON.parse(window.sessionStorage.getItem(itemName)));
        //     }
        // });

        const storedTab = window.sessionStorage.getItem(itemName);
        
        // const newTab = tabs.map((t,i)=>{
        //     if (storedTab != "undefined")
        //     {
        //         return storedTab
        //     }
        //     else
        //     {
        //         return t;
        //     }
        // });

        // setTabs(newTab);
        // const newTabs = tabs.map(item => (item.name == itemName) 
        // ? window.sessionStorage.getItem(itemName)
        // : item
        // );

        //setTabs(newTabs);

        // setTabs((prevTabs) => prevTabs.map(item =>
        //     console.log(item)
        //     // (item.name === itemName)
        //     //     ? window.sessionStorage.getItem(itemName) : item
        // ));

        return () => {
            //window.sessionStorage.setItem(itemName, tabs[index]);
        }

    }, [index]);

    const handleButton = ()=>{
        console.log(index);
        const itemName = "Page" + (index + 1);
        if(index > 0)
            window.sessionStorage.setItem(itemName,tabs[index]);

        if(index === 0)
            setIndex(1);
        else
            setIndex(0);
    }

    return(
        <>
            <button onClick={handleButton}>UI 변경</button>
            
            {React.createElement(tabs[index]) }
        </>
        
    );
}