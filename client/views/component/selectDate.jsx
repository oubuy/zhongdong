import React from 'react';
import './selectDate.scss';
import { DatePicker, Modal } from 'antd-mobile';
import moment from 'moment';

class SelectDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      begin_date: props.begin_date ? props.begin_date : moment().format('YYYY-MM-DD'),
      end_date: props.end_date ? props.end_date : moment().format('YYYY-MM-DD'),
      visible: false,
    }
  }
  show = () => {
    this.setState({ visible: true })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      begin_date: nextProps.begin_date ? nextProps.begin_date : moment().format('YYYY-MM-DD'),
      end_date: nextProps.end_date ? nextProps.end_date : moment().format('YYYY-MM-DD')
    })
  }
  modalDateOnChange = (type, date) => {
    this.state[type] = moment(date).format('YYYY-MM-DD');
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
    let minDate = this.props.minDate, maxDate = this.props.maxDate;
    if (begin_date) {
      if (minDate) {
        if (new Date(begin_date).getTime() > minDate.getTime()) {
          minDate = new Date(begin_date);
        }
      } else {
        minDate = new Date(begin_date);
      }
    }

    if (end_date) {
      if (maxDate) {
        if (new Date(end_date).getTime() < minDate.getTime()) {
          maxDate = new Date(end_date);
        }
      } else {
        maxDate = new Date(end_date);
      }
    }

    if (minDate && maxDate) {
      if (maxDate.getTime() < minDate.getTime()) {
        maxDate = null;
      }
    }

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
          mode={this.props.mode || "date"}
          value={begin_date ? new Date(begin_date) : new Date()}
          onChange={this.modalDateOnChange.bind(this, 'begin_date')}
          minDate={this.props.minDate}
          maxDate={maxDate}
        >
          <div className="dateInput flex-vcenter">
            <div className="icon_date mr10 ml15"></div>
            <div className="ml15">{begin_date ? begin_date : moment().format('YYYY-MM-DD')}</div>
          </div>
        </DatePicker>
        至
      <DatePicker
          mode={this.props.mode || "date"}
          value={end_date ? new Date(end_date) : new Date()}
          onChange={this.modalDateOnChange.bind(this, 'end_date')}
          minDate={minDate}
          maxDate={this.props.maxDate}
        >
          <div className="dateInput flex-vcenter">
            <div className="icon_date  mr10 ml15"></div>
            <div className="ml15">{end_date ? end_date : moment().format('YYYY-MM-DD')}</div>
          </div>
        </DatePicker>
        {/* <DatePicker
          mode={this.props.mode || "date"}
          value={begin_date ? new Date(begin_date) : new Date()}
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
          value={end_date ? new Date(end_date) : new Date()}
          onChange={this.modalDateOnChange.bind(this, 'end_date')}
        >
          <div className="dateInput flex-vcenter">
            <div className="icon_date  mr10 ml15"></div>
            <div className="ml15">{end_date}</div>
          </div>
        </DatePicker> */}
      </div>
    </Modal>
  }
}
export default SelectDate;