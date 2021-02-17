import * as React from "react";
import { List, Datagrid, TextField, EmailField, SimpleList,Filter,TextInput,ReferenceInput,SelectInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import {useEffect} from 'react';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Pizza" source="pizzaId" reference="pizza" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
  );
  


export const MenuList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
      <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
               <Datagrid>
                   <TextField source="id"/>
                   <TextField source="Item_Name"/>
                   <TextField source="Item_img"/>
                   <TextField source="Item_desc"/>
                   <TextField source="Item_stocks"/>
               </Datagrid>
            )}
        </List>
    );
}
