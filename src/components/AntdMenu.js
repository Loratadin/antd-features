import React, { PureComponent } from "react";
import {  Menu, Icon } from "antd";

const { Item } = Menu;
export default class AntdMenu extends PureComponent {
    render() {
        return (
            <div className="sider">
                <Menu theme="dark" mode="inline" >
                    <Item key="/users">
                        <Icon type="user" />
                        <span>Brukere</span>
                    </Item>
                    <Item key="/secret">
                        <Icon type="plus" />
                        <span>Registrer ny bruker</span>
                    </Item>
                    <Item key="/Whatevs">
                        <Icon type="check" />
                        <span>Rapporterte feil</span>
                    </Item>
                    <Menu.Divider />
                    <Item  key="/logOut">
                        <Icon type="logout" />
                        <span>Logg ut</span>
                    </Item>
                </Menu>
        </div>
        );
    }
}