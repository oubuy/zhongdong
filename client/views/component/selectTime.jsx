import React from 'react';
import './selectTime.scss';
import { DatePicker, Modal } from 'antd-mobile';
import moment from 'moment';

class SelectTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            begin_date: props.begin_date,
            end_date: props.end_date,
            visible: false,
        }
    }
    show = () => {
        this.setState({ visible: true })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            begin_date: nextProps.begin_date,
            end_date: nextProps.end_date
        })
    }
    modalDateOnChange = (type, date) => {
        this.state[type] = moment(date).format('HH:mm');
        this.setState({});
    }
    complete = () => {
        this.setState({ visible: false })
        if (this.props.complete && this.state.begin_date && this.state.end_date) {
            this.props.complete(this.state.begin_date, this.state.end_date)
        } else {
            if (this.props.cancel) {
                this.props.cancel()
            }
        }
    }
    onCancel = () => {
        if (this.props.cancel) {
            this.props.cancel()
        }
        this.setState({ visible: false })
    }
    render() {
        let { begin_date, end_date, visible } = this.state;
        console.log(begin_date, end_date)
        return <Modal
            visible={visible}
            transparent
            maskClosable={false}
            className="modelSelectDate"
            title={this.props.title || "自由时间段选择"}
            footer={[{ text: '确定', onPress: this.complete },
            { text: '取消', onPress: this.onCancel }]}
        >
            <div className="flex-center modelSelectDateBody">
                <DatePicker
                    mode={"time"}
                    value={begin_date ? new Date(moment(moment().format('YYYY-DD-MM ') + begin_date).valueOf()) : null}
                    maxDate={end_date ? new Date(moment(moment().format('YYYY-DD-MM ') + end_date).valueOf()) : null}
                    onChange={this.modalDateOnChange.bind(this, 'begin_date')}
                >
                    <div className="dateInput flex-vcenter">
                        <div className="icon_date mr10 ml15"></div>
                        <div className="ml15">{begin_date}</div>
                    </div>
                </DatePicker>
                至
             <DatePicker
                    mode={this.props.mode || "date"}
                    value={end_date ? new Date(moment(moment().format('YYYY-DD-MM ') + end_date).valueOf()) : null}
                    minDate={begin_date ? new Date(moment(moment().format('YYYY-DD-MM ') + begin_date).valueOf()) : null}
                    onChange={this.modalDateOnChange.bind(this, 'end_date')}
                >
                    <div className="dateInput flex-vcenter">
                        <div className="icon_date  mr10 ml15"></div>
                        <div className="ml15">{end_date}</div>
                    </div>
                </DatePicker>
            </div>
        </Modal>
    }
}
export default SelectTime;