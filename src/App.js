import * as React from "react";

import { Admin, EditGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './AuthProvider/AuthProvider';
import { MenuList } from "./components/Menu";
import { OrderList } from "./components/Orders";
import { AdminList } from "./Admin";
import {StaffList} from "./components/Staff";

import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { createMuiTheme } from '@material-ui/core/styles';
import { UserList } from "./components/users";

import UserIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MyLayout from "./components/MyLayout";

import jsonServerProvider from "ra-data-json-server";
import { PostCreate, PostList } from "./components/posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: '#ff7043',
    },
  },
});

const App = () => (
    <Admin theme={theme} layout={MyLayout} catchAll={NotFound} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider} disableTelemetrys>
        <Resource name="menu" list={MenuList} icon={MenuBookIcon}/>
        <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate}/>
        <Resource name="order" list={OrderList} icon={ShoppingCartIcon}/>
        <Resource name="admin" list={AdminList} icon={SupervisorAccountIcon}/>
        <Resource name="staff" list={StaffList} icon={PeopleOutlineIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;