import React, { PureComponent } from "react";
import { Button, DatePicker } from "antd";

const { RangePicker } = DatePicker;
export default class AntdRange extends PureComponent {
    render() {
        const { onToggle } = this.props;
        return (
            <React.Fragment>
                <Button onClick={() => onToggle("dateRangeView")} type="primary" icon="arrow-left" className="back-button">Back to Menu</Button>
                <div className="range__container"><RangePicker /></div>
            </React.Fragment>
        );
    }
}