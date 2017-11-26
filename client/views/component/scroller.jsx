import React from 'react';
import 'js/lib/dropload/dropload';
import 'js/lib/dropload/dropload.css';
import $ from 'jquery';

const Scroller = React.createClass({
    getInitialState() {
        return { data: null, type: undefined }
    },
    getDefaultProps() {
        return { active: true };
    },
    componentDidMount() {
        var self = this,
            filter = self.props.filter,
            config = {
                size: 10,
                from: 0,
                query: this.props.query
            };
        if (filter) {
            var key;
            for (key in filter) {
                if (filter.hasOwnProperty(key)) {
                    if (!config.hasOwnProperty(key)) {
                        config[key] = filter[key];
                    }
                }
            }
        }

        self.config = config;
        this.refreshList();
    },
    refreshList() {
        var self = this;
        if (!self.dropload && self.props.active) {
            var scrollerNode = this.props.scrollerNode || $(self.refs.scrollerNode);
            var randomId = self.randomId;
            if (randomId) {
                $('#' + randomId).remove();
            }

            self.randomId = 'dropload-down' + parseInt(Math.random() * 100000);

            self.dropload = scrollerNode.dropload({
                scrollArea: scrollerNode,
                domDown: {
                    domClass: 'dropload-down',
                    domId: self.randomId,
                    domRefresh: '',
                    domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
                    domNoData: '<div class="dropload-noData"></div>'
                },
                threshold: 50,
                scrollFn: self.props.scrollFn,
                loadDownFn(me) {
                    self.loadDownFn(me);
                }
            });
        }
    },
    loadDownFn(me) {
        var self = this;
        var groupConfig = this.config,
            dataSource = this.props.dataSource;
        dataSource(groupConfig, function (data) {
            var length = data.data.length;
            if (length === 0 || length < groupConfig.size) {
                me.lock();
                me.noData();
                if (self.randomId) {
                    $('#' + self.randomId).remove();
                }
            }

            if (!self.state.data) {
                self.state.data = [];
            }
            if (length > 0) {
                var newData = self.state.data.concat(data.data);
                self.setState({ data: newData });
            } else {
                self.setState({ data: self.state.data, type: groupConfig.type });
            }
            groupConfig.from += length;
            me.resetload();
        });

    },
    reLoad(query, filter) {
        this.state.data = [];

        var config = {
            size: 10,
            from: 0,
            query: query
        };
        if (filter) {
            var key;
            for (key in filter) {
                if (filter.hasOwnProperty(key)) {
                    if (!config.hasOwnProperty(key)) {
                        config[key] = filter[key];
                    }
                }
            }
        }

        this.dropload.unlock();
        this.dropload.noData(false);
        this.config = config;
        this.loadDownFn(this.dropload);
    },
    componentWillUnmount() {
        var self = this;
        if (self.dropload) {
            self.dropload.destroy();
        }

    },
    lock() {
        this.dropload.lock();
        this.dropload.noData();
    },
    resetload() {
        this.dropload.unlock();
        this.dropload.noData(false);
        this.dropload.resetload();
    },
    removeOne(index) {
        if (this.config.total !== 0 && this.config.from !== 0) {
            this.config.total -= 1;
            this.config.from -= 1;
            this.state.data.splice(index, 1);
            this.setState({ data: this.state.data })
        }
    },
    render() {
        var self = this,
            children,
            name = '',
            myClass = '',
            hasClass = (this.props.hasClass === false) ? false : true;

        if (this.state.data) {
            children = React.cloneElement(this.props.children, { data: self.state.data, type: self.state.type || self.props.type });
        }
        if (hasClass) {
            name = 'absolute native-scroll ';
        }
        return (
            <div ref='scrollerNode' className={name + this.props.className}>
                {children}
            </div>
        )
    }
});

export {
    Scroller
};
