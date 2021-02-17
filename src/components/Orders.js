import * as React from "react";
import { List, Datagrid, TextField, SimpleList,Filter,TextInput,ReferenceInput,SelectInput, DateField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Orders" source="orderid" reference="Orders" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
  );
  
//add more about the view details and order status drop down
export const OrderList = (props) => {
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
                   <TextField source="No."/>
                   <DateField source="Order_date"/>
                   <DateField source="Delivery_date"/>
                   <TextField source="Customer_name"/>
                   <TextField source="Order_amt"/>
                   <TextField source="Payment_status"/>
                   <TextField source="Payment_method"/>
               </Datagrid>
            )}
        </List>
    );
}

export default OrderList;
