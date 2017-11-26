import React from 'react';
import './radio.scss';

class RadioComponent extends React.Component {
  constructor() {
    super()
  }
  onChange = () => {
    if (this.props.disabled === true) {
      return
    }
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  }
  render() {
    const { title, checked, disabled } = this.props;
    return <div className={"radioComponent flex-center" + (disabled ? ' disabled' : '')} onClick={this.onChange}>
      <div className={"circle flex-center " + (checked ? 'active' : '') } ><span className="spot"></span></div>
      <div>{title}</div>
    </div>
  }
}

export default RadioComponent;
