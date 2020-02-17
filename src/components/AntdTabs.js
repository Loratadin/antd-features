import React, { PureComponent } from "react";
import { Tabs, Checkbox  } from "antd";

const { TabPane } = Tabs;
export default class AntdTabs extends PureComponent {
    getColor = color => {
        let checkboxClassName = "checkbox-green";
        if (color === "#FA8072") {
            checkboxClassName = "checkbox-orange"
        }
        if (color === "#1890FF") {
            checkboxClassName = "checkbox-blue"
        }
        return checkboxClassName;
    };

    render() {
        const dataFromAPI = [
            {
                key: "first",
                name: "First",
                color: "#008100",
            },
            {
                key: "second",
                name: "Second",
                color: "#FA8072",
            },
            {
                key: "third",
                name: "Third",
                color: "#1890FF",
            },
        ]
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Vivamus et feugiat eros. Sed nisi quam" key="1">
                            {dataFromAPI.map(item => (
                                <div>
                                    <Checkbox
                                        key={item.key}
                                        className={this.getColor(item.color)}
                                    >
                                        {item.name}
                                    </Checkbox>
                                </div>
                            ))}
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}