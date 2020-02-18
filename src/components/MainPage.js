import React, { PureComponent } from "react";
import AntdTable from "./AntdTable";
import AntdRange from "./AntdRange";
import AntdTabs from "./AntdTabs";
import AntdMenu from "./AntdMenu";
import AntdFormSelect from "./AntdFormSelect";

export default class MainPage extends PureComponent {
  state = {
    tableView: false,
    dateRangeView: false,
    tabsView: false,
    siderMenuView: false,
    formView: false,
  };

  toggleComponent = key => this.setState({[key]: !this.state[key]})

  render() {
    const { tableView, dateRangeView, tabsView, siderMenuView, formView } = this.state;
    const mainView = !tableView && !dateRangeView && !tabsView && !siderMenuView && !formView;
    return (
      <div className="main__container">
        {mainView && (
          <div className="main__menu-wrap">
            <div className="main__menu-item"onClick={() => this.toggleComponent("tableView")}>Table Customized for Mobile</div>
            <div className="main__menu-item" onClick={() => this.toggleComponent("dateRangeView")}>Date Range Picker for Mobile</div>
            <div className="main__menu-item" onClick={() => this.toggleComponent("tabsView")}>Tabs</div>
            <div className="main__menu-item" onClick={() => this.toggleComponent("siderMenuView")}>Sider Menu Items</div>
            <div className="main__menu-item" onClick={() => this.toggleComponent("formView")}>Form with Select</div>
          </div>
        )}
        {tableView && <AntdTable onToggle={this.toggleComponent} />}
        {dateRangeView && <AntdRange onToggle={this.toggleComponent} />}
        {tabsView && <AntdTabs onToggle={this.toggleComponent} />}
        {siderMenuView && <AntdMenu onToggle={this.toggleComponent} />}
        {formView && <AntdFormSelect onToggle={this.toggleComponent} />}
      </div>
    );
  }
}
