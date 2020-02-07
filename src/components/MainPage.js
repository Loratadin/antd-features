import React, { PureComponent } from "react";
import AntdTable from "./AntdTable";
import AntdRange from "./AntdRange";

export default class MainPage extends PureComponent {
  state = {
    tableView: false,
    dateRangeView: false,
  };

  toggleComponent = key => this.setState({[key]: !this.state[key]})

  render() {
    const { tableView, dateRangeView } = this.state;
    const mainView = !tableView && !dateRangeView;
    return (
      <div className="main__container">
        {mainView && (
          <div className="main__menu-wrap">
            <div className="main__menu-item"onClick={() => this.toggleComponent("tableView")}>Table Customized for Mobile</div>
            <div className="main__menu-item"onClick={() => this.toggleComponent("dateRangeView")}>Date Range Picker for Mobile</div>
          </div>
        )}
        {tableView && <AntdTable onToggle={this.toggleComponent} />}
        {dateRangeView && <AntdRange onToggle={this.toggleComponent}/>}
      </div>
    );
  }
}
