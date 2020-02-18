import React, { PureComponent } from "react";
import { Form, Select } from "antd";

const { Option } = Select;
export default class AntdFormSelect extends PureComponent {
    state = {
        selectedValue: undefined,
    }

    updateSelectedValue = value => this.setState({ selectedValue: value })

    render() {
        const { selectedValue } = this.state;
        return (
            <Form>
                    <Form.Item>
                        <Select
                            value={selectedValue ? selectedValue : "TAG"}
                            onChange={(value) => this.updateSelectedValue(value)}
                        >
                            <Option value="MARKER">Marker</Option>
                            <Option value="TAG">Tag</Option>
                            <Option value="FIELD">Field</Option>
                        </Select>
                    </Form.Item>
            </Form>
          );
    }
}