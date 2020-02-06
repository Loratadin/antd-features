import React, { PureComponent } from "react";
import AntdTable from "./AntdTable";

export default class MainPage extends PureComponent {
  state = {
    tableView: false,
  };

  toggleComponent = key => this.setState({[key]: !this.state[key]})

  render() {
    const { tableView } = this.state;
    const mainView = !tableView;
    return (
      <React.Fragment>
        {mainView && (
          <div className="main__menu-wrap">
            <div className="main__menu-item"onClick={() => this.toggleComponent("tableView")}>Table Customized for Mobile</div>
          </div>
        )}
        {tableView && <AntdTable />}
      </React.Fragment>
    );
  }
}
