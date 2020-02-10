import React, { PureComponent } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default class AntdTabs extends PureComponent {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Vivamus et feugiat eros. Sed nisi quam" key="1">
                    Content of Tab Pane 1
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