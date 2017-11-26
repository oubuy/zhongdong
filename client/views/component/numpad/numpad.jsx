
import $ from 'jquery';
import './numpad.scss';
import React from 'react';
import { Popup } from 'antd-mobile';

const NumPadComponent = React.createClass({
    getInitialState() {
        this.decimal = false;
        this.Minus = '';
        return { value: this.props.value ? this.props.value.toString() : '' }
    },
    componentDidMount() {
        $('.numpad button').on('touchstart', function () {
            $(this).addClass('active');
        })

        $('.numpad button').on('touchend', function () {
            var self = this;
            setTimeout(function () {
                $(self).removeClass('active');
            }, 100)
        })
    },
    delete() {
        this.decimal = false;
        this.Minus = '';
        this.setState({ value: null })
    },
    setValue(value) {
        if (this.decimal === false) {
            value = this.state.value ? this.state.value + value : value;
        } else if (this.decimal === true) {
            let decimalNum = this.state.value ? this.state.value.split(".")[1] : null;
            if (decimalNum) {
                if (decimalNum.length >= 2) {
                    value = this.state.value.substring(0, this.state.value.length - 1) + value;
                } else {
                    value = this.state.value + value;
                }
            } else {
                value = this.state.value ? this.state.value + '.' + value : '0.' + value;
            }
        }
        this.setState({ value: value })
    },
    confirm() {
        let value;
        if (this.state.value === null || this.state.value === '') {
            value = null;
        } else {
            value = Number(this.Minus + this.state.value);
        }
        this.props.onChange(value);
        this.props.onClose();
    },
    setDecimal() {
        if (this.decimal === false) {
            this.decimal = true;
        }
    },
    setMinus() {
        if (this.Minus === '') {
            this.Minus = '-';
        } else {
            this.Minus = '';
        }
        this.setState({})
    },
    format(num) {
        if (!num || num === '') {
            return this.Minus;
        }
        num = num + "";
        var re = /(-?\d+)(\d{3})/
        while (re.test(num)) {
            num = num.replace(re, "$1,$2")
        }
        return this.Minus + num;
    },
    render() {
        return <div className="numpad">
            <div className="input">{this.format(this.state.value)}</div>
            <div className="line flex">
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '7')}>7</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '8')}>8</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '9')}>9</button>
                <button className="item flex-g-1" onClick={this.delete}>删除</button>
            </div>
            <div className="line flex">
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '4')}>4</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '5')}>5</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '6')}>6</button>
                <button className="item flex-g-1" onClick={this.delete}>重置</button>
            </div>
            <div className="line flex">

                <button className="item flex-g-1" onClick={this.setValue.bind(this, '1')}>1</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '2')}>2</button>
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '3')}>3</button>
                <button className="item flex-g-1" onClick={() => this.props.onClose()}>取消</button>
            </div>
            <div className="line flex">
                {this.props.hidePlusMinusButton ?
                    <button className="item flex-g-1"></button> :
                    <button className="item flex-g-1" onClick={this.setMinus}>-</button>
                }
                <button className="item flex-g-1" onClick={this.setValue.bind(this, '0')}>0</button>
                {this.props.hideDecimalButton ?
                    <button className="item flex-g-1"></button> :
                    <button className="item flex-g-1" onClick={this.setDecimal}>.</button>
                }
                <button className="item flex-g-1" onClick={this.confirm}>确定</button>
            </div>
        </div>
    }
})

var NumPad = React.createClass({
    onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    },
    onClick() {
        if (this.props.disabled) {
            return
        }
        Popup.show(<NumPadComponent onClose={() => { Popup.hide() }}
            hideDecimalButton={this.props.hideDecimalButton}
            hidePlusMinusButton={this.props.hidePlusMinusButton} onChange={this.onChange} />, { animationType: 'slide-up' })
    },
    show() {
        Popup.show(<NumPadComponent onClose={() => { Popup.hide() }}
            hideDecimalButton={this.props.hideDecimalButton}
            hidePlusMinusButton={this.props.hidePlusMinusButton} onChange={this.onChange} />, { animationType: 'slide-up' })
    },
    render() {
        return <div onClick={this.onClick} className={this.props.className}>
            {this.props.children}
        </div>
    }
});

export { NumPad }

