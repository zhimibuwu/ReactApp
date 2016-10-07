var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        }
    },
    render: function() {
        return <div className="input-group">
            <input
                value={this.state.text}
                onChange={this.handleInputChange}
                type="text"
                className="form-control" />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                    Add
                </button>
            </span>
        </div>
    },
    handleClick: function() {
        // Send value of text input to Firebase

    }

    handleInputChange: function(event) {
        this.setState({text: event.target.value});
    }
});
