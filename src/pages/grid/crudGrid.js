import React from "react";
import Box, {Item} from 'devextreme-react/box'
import { Accordion } from "devextreme-react/accordion";
import { useScreenSize } from '../../utils/media-query';
import { DateBox } from "devextreme-react/date-box";
import { TextBox } from "devextreme-react/text-box";
import { SelectBox } from "devextreme-react/select-box";
import { Button } from "devextreme-react/button";

import DataGrid, {
    Column,
    Editing,
    Popup,
    Paging,
    Lookup,
    Form,
  } from 'devextreme-react/data-grid';
  import 'devextreme-react/text-area';
  import { formItem } from 'devextreme-react/form';
  import { employees, states } from './data.js';


export default function CrudGrid(){

    const filterStyle = {
        background:"white",
        border:"solid",
        borderColor:"lightgray",
        borderWidth:"0.5px",
        margin:"5px",
        padding:"10px",
        height:`calc(100vh - 100px)`
    }
    const contentStyle = {
        background : "white",
        border:"solid",
        borderColor:"lightgray",
        borderWidth:"0.5px",
        margin:"5px 5px 5px 0",
        padding:"10px",
        height:"100%"
    }

    const gridHeight = 
        `calc(100vh - 157px)`
    
    

    return(
        <>
        <div className="pageArea">

        <Box 
            direction="row"
            width="100%"
            height="100%"
            crossAlign="stretch">
                <Item
                    ratio={0}
                    baseSize={300}
                    height="100%"
                    >
                    <div className="dx-fieldset" style={filterStyle}>
                        <div style={{marginBottom:"20px"}}>Filter area</div>

                        <div className="dx-field" >
                            <div className="dx-field-value">
                            </div>
                            <div className="dx-field-value" >
                            <Button
                                icon="search"
                                type="defult"
                                stylingMode="contained"
                                />
                                <Button
                                icon="undo"
                                type="normal"
                                stylingMode="contained"
                                crossAlign="end"
                                />
                            </div>
                        </div>
                        

                        <div className="dx-field">
                            <div className="dx-field-value" style={{width:"100%"}}>
                            <DateBox 
                                defaultValue={new Date()}
                                label="조회기간 (시작)"
                                labelMode="floating"
                                stylingMode="outlined"
                                type="datetime" />
                            </div>
                        </div>
                        <div className="dx-field">
                            <div className="dx-field-value" style={{width:"100%"}}>
                            <DateBox 
                                defaultValue={new Date()}
                                label="조회기간 (종료)"
                                labelMode="floating"
                                stylingMode="outlined"
                                type="datetime" />
                            </div>
                        </div>

                        <div className="dx-field">
                            <div className="dx-field-value" style={{width:"100%"}}>
                            <TextBox placeholder="Enter full name here..." 
                                label="제품"
                                labelMode="floating"
                                stylingMode="outlined"
                                showClearButton={true}
                            />
                            </div>
                        </div>

                        <div className="dx-field">
                            <div className="dx-field-value" style={{width:"100%"}}>
                            <SelectBox items={["2002","2003"]} 
                                label="라인"
                                labelMode="floating"
                                stylingMode="outlined"/>
                            </div>
                    </div>
                    </div>
                </Item>
                <Item
                    ratio={1}>
                    <div className="dx-fieldset" style={contentStyle}>
                        <div style={{marginBottom:"20px"}}>Content area</div>

                        <div id="data-grid-demo">
                            <DataGrid
                            dataSource={employees}
                            keyExpr="ID"
                            showBorders={true}
                            height= {gridHeight}
                            >
                            <Paging enabled={false} />
                            <Editing
                                mode="popup"
                                allowUpdating={true}
                                allowAdding={true}
                                allowDeleting={true}>
                                <Popup title="Employee Info" showTitle={true} width={700} height={525} />
                                <Form>
                                <formItem itemType="group" colCount={2} colSpan={2}>
                                    <formItem dataField="FirstName" />
                                    <formItem dataField="LastName" />
                                    <formItem dataField="Prefix" />
                                    <formItem dataField="BirthDate" />
                                    <formItem dataField="Position" />
                                    <formItem dataField="HireDate" />
                                    <formItem
                                    dataField="Notes"
                                    editorType="dxTextArea"
                                    colSpan={2}
                                    editorOptions={{ height: 100 }} />
                                </formItem>

                                <formItem itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                                    <formItem dataField="StateID" />
                                    <formItem dataField="Address" />
                                </formItem>
                                </Form>
                            </Editing>
                            <Column dataField="Prefix" caption="Title" width={70} />
                            <Column dataField="FirstName" />
                            <Column dataField="LastName" />
                            <Column dataField="BirthDate" dataType="date" />
                            <Column dataField="Position" width={170} />
                            <Column dataField="HireDate" dataType="date" />
                            <Column dataField="StateID" caption="State" width={125}>
                                <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
                            </Column>
                            <Column dataField="Address" visible={false} />
                            <Column dataField="Notes" visible={false} />
                            </DataGrid>
                        </div>
                    </div>
                    
                </Item>
        </Box>
        </div>
           
        </>
    );
}