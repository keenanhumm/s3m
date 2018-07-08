import React from 'react';

export default class ChannelSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creating: false
    };
  }
  createChannel(event) {
    event.preventDefault();
    this.setState({
      creating: true
    });
    this.props.handleCreateChannel(this.props.searchText);
  }
  render() {
    return (
    <div className="channel-search animated fadeIn">
      <div className="channel-input">
        <input
          type="text"
          placeholder="Search Channels"
          onChange={(event) => {
            event.preventDefault();
            this.props.onChannelSearchChange(event.target.value);
          }}
          value={this.props.searchText}
          maxLength={16}
        />
      </div>
      {!this.props.channelResults.length && this.props.searchText !== '' &&
        <div className="create-channel">
          {this.state.creating ?
            <div className="animated fadeIn creating">Creating...</div>
            :
            <button onClick={event => this.createChannel(event)}>Create</button>
          }
        </div>
      }
    </div>
    );
  }
}
