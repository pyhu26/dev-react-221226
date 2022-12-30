import React from 'react';
import 'devextreme/data/odata/store';
import TabPanel from 'devextreme-react/tab-panel';

export default function Dynamic() {
    
    const firstComponent = require("./" + "page1").default;
    const [pageName, setPageName] = React.useState("page1");
    const [useSelectedIndex, setSelectedIndex ] = React.useState(0);
    const [usePages, setPages] = React.useState([firstComponent]);
    const dynamicComponent = usePages[useSelectedIndex];
    
    const onSelectionChanged = (args)=> {
        if (args.name === 'selectedIndex') {
            const currPageName = "page" + (args.value + 1);
            console.log("onSelectionChanged", currPageName);
            console.log("setSelectedIndex", args.value);
            setSelectedIndex(
                 args.value,
            );
            console.log("setPageName", currPageName);
            setPageName(
                currPageName
            );

            let newPages = [];

            usePages.forEach( r=>{
                console.log(r.name);
                if(r.name != currPageName) 
                    newPages.push(require("./" + currPageName));
            });

            if(newPages.length > 0)
                setPages((prePages)=>[...prePages, newPages]);

            // setPages((prePages) => prePages.concat( require("./" + currPageName).default));
            //setPages((prePages) => [...prePages, require("./" + currPageName).default]);
            console.log("setPages", usePages);

        }
    }

    const itemTitleRender = (company)=> {
        return <span>{company.CompanyName}</span>;
    }

    const multiViewItems = [{
        ID: 1,
        CompanyName: 'SuprMart',
        Address: '702 SW 8th Street',
        City: 'Bentonville',
        State: 'Arkansas',
        Zipcode: 72716,
        Phone: '(800) 555-2797',
        Fax: '(800) 555-2171',
        Website: 'http://www.nowebsitesupermart.com',
    }, {
        ID: 2,
        CompanyName: "El'Depot",
        Address: '2455 Paces Ferry Road NW',
        City: 'Atlanta',
        State: 'Georgia',
        Zipcode: 30339,
        Phone: '(800) 595-3232',
        Fax: '(800) 595-3231',
        Website: 'http://www.nowebsitedepot.com',
    }, {
        ID: 3,
        CompanyName: 'K&S Music',
        Address: '1000 Nicllet Mall',
        City: 'Minneapolis',
        State: 'Minnesota',
        Zipcode: 55403,
        Phone: '(612) 304-6073',
        Fax: '(612) 304-6074',
        Website: 'http://www.nowebsitemusic.com',
    }, {
        ID: 4,
        CompanyName: 'Tom Club',
        Address: '999 Lake Drive',
        City: 'Issaquah',
        State: 'Washington',
        Zipcode: 98027,
        Phone: '(800) 955-2292',
        Fax: '(800) 955-2293',
        Website: 'http://www.nowebsitetomsclub.com',
    }];
    return (
        <>
            <TabPanel
                height={260}
                dataSource={multiViewItems}
                selectedIndex={useSelectedIndex}
                onOptionChanged={onSelectionChanged}         
                itemTitleRender={itemTitleRender}                       
                itemComponent={dynamicComponent}
                animationEnabled={false}
                swipeEnabled={true}
            />

            <input type="button" value="page1" name='page1' onClick={(e)=>{ setPageName("page1")}}/>
            <input type="button" value="page2" name='page2' onClick={(e)=>{ 
                setPageName("page2");
                console.log(pageName);
            }}/>

            { React.createElement(dynamicComponent) }
        </>


    );
    //return React.createElement(importedComponentModule); 

    // return (
    //     <React.Fragment>
    //         <h2 className={'content-block'}>Dynamic</h2>


    //     </React.Fragment>
    // )
}

