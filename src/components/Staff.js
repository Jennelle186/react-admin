import * as React from "react";
import { List, Datagrid, TextField, EmailField, SimpleList,Filter,TextInput,ReferenceInput,SelectInput, DateField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Staff" source="userId" reference="Staff" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
  );
  
//add more about the view details and order status drop down
export const StaffList = (props) => {
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
                   <TextField source="Last_Name"/>
                   <DateField source="First_Name"/>
                   <EmailField source="Email"/>
                   <TextField source="Password"/>
                   <TextField source="Address"/>
                   <TextField source="Phone Number"/>
               </Datagrid>
            )}
        </List>
    );
}
