import React from 'react';
import { Route, Link } from 'react-router-dom';
import StatGrid from './StatGrid.jsx';
import DeathMap from './DeathMap.jsx';

class StatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeInput: null,
      killsInput: null,
      lootInput: null,
      gameType: null,
      flashText: null,
      stormDeath: false,
    }
    this.handlePlaceInputChange = this.handlePlaceInputChange.bind(this);
    this.handleKillsInputChange = this.handleKillsInputChange.bind(this);
    this.handleLootInputChange = this.handleLootInputChange.bind(this);
    this.handleGameTypeOptionChange = this.handleGameTypeOptionChange.bind(this);
    this.handleNotReadySubmit = this.handleNotReadySubmit.bind(this);
    this.handleStormDeathOptionChange = this.handleStormDeathOptionChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  resetInputs() {
    document.getElementById('placeInput').value = '';
    document.getElementById('killsInput').value = '';
    document.getElementById('lootInput').value = '',
    document.getElementById('falseStormDeath').selected = true;
    this.setState({
      placeInput: null,
      killsInput: null,
      lootInput: null,
      gameType: null,
      flashText: null,
      stormDeath: false,
    });
  }

  handlePlaceInputChange(e) {
    this.setState({
      placeInput: Number(e.target.value),
    });
  }

  handleKillsInputChange(e) {
    this.setState({
      killsInput: Number(e.target.value),
    });
  }

  handleLootInputChange(e) {
    this.setState({
      lootInput: Number(e.target.value),
    });
  }

  handleGameTypeOptionChange(e) {
    this.setState({
      gameType: e.target.value,
    });
  }

  handleStormDeathOptionChange(e) {
    const stormDeath = (e.target.value === 'true' ? true : false);
    this.setState({
      stormDeath, 
    });
  }

  handleNotReadySubmit() {
    const context = this;
    if (!this.props.loggedIn) {
      this.setState({
        flashText: 'You must log in to submit a game.',
      });
    } else if (this.state.placeInput < 1 || this.state.placeInput > 100 || this.state.placeInput === null) {
      this.setState({
        flashText: 'Your place needs to be between 1 and 100',
      });
    } else if (this.state.killsInput < 0 || this.state.killsInput > 99 || this.state.killsInput === null) {
      this.setState({
        flashText: 'Your kills need to be between 0 and 99',
      });
    } else if (this.state.lootInput < 0 || this.state.lootInput > 10 || this.state.lootInput === null) {
      this.setState({
        flashText: 'Your loot rating needs to be between 0 and 10',
      });
    } else if (this.state.gameType !== 'solo' && this.state.gameType !== 'duo' && this.state.gameType !== 'squad') {
      this.setState({
        flashText: 'Please select a game type',
      });
    }
    setTimeout(() => {
      context.setState({
        flashText: null,
      })
    }, 3000);
  }

  render() {
    return (
      <div data-step="5" data-intro="Once you have completed a game fill out game stats, choose where you died (or won), and submit your game" className="statBox">
        <div data-step="4" data-intro="You can choose to look at stats from all submitted games of this location, or filtered by game type" className="temporaryGameTypeSelector">
          <span className={this.props.currentGameType === 'solo' ? 'selected gameTypeSelector' : 'gameTypeSelector'} onClick={() => this.props.changeGameType('solo')}>Solo</span><span className={this.props.currentGameType === 'duo' ? 'selected gameTypeSelector' : 'gameTypeSelector'} onClick={() => this.props.changeGameType('duo')} >Duo</span><span className={this.props.currentGameType === 'squad' ? 'selected gameTypeSelector' : 'gameTypeSelector'} onClick={() => this.props.changeGameType('squad')} >Squad</span><span className={this.props.currentGameType === 'all' ? 'selected gameTypeSelector' : 'gameTypeSelector'} onClick={() => this.props.changeGameType('all')} >All</span>
        </div>
        <StatGrid stats={this.props.userGameData[this.props.location.name] ? this.props.userGameData[this.props.location.name][this.props.currentGameType] : undefined} />
        <div className="entryContainer">
          <h3 className="inputLabel">What place did you come in?</h3> <input type="number" id="placeInput" onChange={(e) => this.handlePlaceInputChange(e)} />
        </div>
        <div className="entryContainer">
          <h3 className="inputLabel">How many kills did you have?</h3> <input type="number" id="killsInput" onChange={(e) => this.handleKillsInputChange(e)} />
        </div>
        <div className="entryContainer">
          <h3 className="inputLabel">Rate your loot 1-10</h3> <input type="number" id="lootInput" onChange={(e) => this.handleLootInputChange(e)} />
        </div>
        {/* <div className="entryContainer">
          <h3 className="inputLabel">Where did you die?</h3> 
          <select id="deathInput" onChange={this.handleChange}>
            <option value="null"></option>
            {this.props.locations.map(location => <option value={location.camelCase}>{location.name}</option>)}
            <option value="betweenLocations">Between Locations</option>
            <option value="winner">I Won!</option>
          </select>
        </div> */}
        <div className="entryContainer">
          <h3 className="inputLabel">Did you die from the storm?</h3>
          <select id="stormDeath" onChange={this.handleStormDeathOptionChange}>
            <option value="false" id="falseStormDeath">No</option>
            <option value="true" id="trueStormDeath">Yes</option>
          </select>
        </div>
        <div id="gameTypeOptions">
          <input type="radio" value="solo" id="soloRadio" name="gameType" checked={this.state.gameType === 'solo'} onChange={this.handleGameTypeOptionChange} /><label htmlFor="soloRadio">Solo</label>
          <input type="radio" value="duo" id="duoRadio" name="gameType" checked={this.state.gameType === 'duo'} onChange={this.handleGameTypeOptionChange} /><label htmlFor="duoRadio">Duo</label>
          <input type="radio" value="squad" id="squadRadio" name="gameType" checked={this.state.gameType === 'squad'} onChange={this.handleGameTypeOptionChange} /><label htmlFor="squadRadio">Squad</label>
        </div>
        {this.state.placeInput <= 100 && this.state.placeInput > 1 && this.state.killsInput >= 0 && this.state.killsInput <= 99 && this.state.lootInput >= 0 && this.state.lootInput <= 10 && (this.state.gameType === 'solo' || this.state.gameType === 'duo' || this.state.gameType === 'squad') && this.props.loggedIn &&
        <Link className="submitGameButtonContainer" to="/home/deathLocation">
          <button className={`submitGameButton ${this.props.submitButtonState ? 'enabledButton' : 'disabledButton'}`} >Where did you die?</button>
        </Link>}
        {this.state.placeInput === 1 && this.state.killsInput >= 0 && this.state.killsInput <= 99 && this.state.lootInput >= 0 && this.state.lootInput <= 10 && (this.state.gameType === 'solo' || this.state.gameType === 'duo' || this.state.gameType === 'squad') && this.props.loggedIn &&
        <Link className="submitGameButtonContainer" to="/home/deathLocation">
          <button className={`submitGameButton ${this.props.submitButtonState ? 'enabledButton' : 'disabledButton'}`} >Where did you win?</button>
        </Link>}
        {(this.props.loggedIn && this.state.placeInput <= 100 && this.state.placeInput >= 1 && this.state.killsInput >= 0 && this.state.killsInput <= 99 && this.state.lootInput >= 0 && this.state.lootInput <= 10 && (this.state.gameType === 'solo' || this.state.gameType === 'duo' || this.state.gameType === 'squad')) || 
        <div className="submitGameButtonContainer">
          <button className="submitGameButton disabledButton" onClick={this.handleNotReadySubmit} >Submit Game</button>
        </div>}
        {this.state.flashText &&
        <div className="flashTextContainer">
          <h2>{this.state.flashText}</h2>
        </div>}
        {this.props.statBoxFlashText &&
        <div className={this.props.statBoxFlashText === 'Game was successfully submitted' ? 'flashTextContainerPositive' : 'flashTextContainer'}>
          <h2>{this.props.statBoxFlashText}</h2>
        </div>}
        <Route path="/home/deathLocation" render={props => <DeathMap {...props}
          submitButtonState={this.props.submitButtonState}
          handleCoordinateChoiceClick={this.props.handleDeathCoordinateChoiceClick}
          userSettings={this.props.userSettings}
          deathMapMarker={this.props.deathMapMarker}
          deathMapMarkerStyle={this.props.deathMapMarkerStyle}
          checkDeathMarkerLocation={this.props.checkDeathMarkerLocation}
          submitGame={this.props.submitButtonState ? () => { this.props.handleSubmit(this.state.placeInput, this.state.killsInput, this.state.lootInput, this.state.gameType, this.state.stormDeath); this.resetInputs(); } : console.log('Button is temporary disabled')}
        />} />
      </div>
    );
  }
}

export default StatBox;
