import React, { PureComponent } from "react";
import { Table, Button } from "antd";

export default class AntdTable extends PureComponent {
  renderMobileTable = columns => {
    return columns.filter(
      column => column.key === "name" || column.key === "city"
    );
  };
  render() {
    const { onToggle } = this.props;
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        lastName: "Willins",
        age: 32,
        address: "10 Downing Street",
        city: "Chicago"
      },
      {
        key: "2",
        name: "John",
        lastName: "Billards",
        age: 42,
        address: "5th Blvd",
        city: "New York"
      }
    ];

    let columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city"
      }
    ];
    const isMobile = window.innerWidth < 500;
    if (isMobile) {
      columns = this.renderMobileTable(columns);
    }
    return (
      <React.Fragment>
        <Button onClick={() => onToggle("tableView")} type="primary" icon="arrow-left" className="back-button">Back to Menu</Button>
        <Table dataSource={dataSource} columns={columns} />
      </React.Fragment>
    );
  }
}
