/* global React */

var React = React || {};

var PlayerCard = React.createClass({
  render: function() { 
    var p = this.props.player;
    var y = p.playerYears[0];
    var photoUrl = 'http://imgix.scout.com/' + ~~(y.primaryPhotoId / 10000) + '/' + y.primaryPhotoId + '.jpg?w=150&h=150&fit=crop&crop=faces';
    var stars = [];
    for (var i = 1; i <= 5; i++) {
      stars.push(<div className={i <= y.rating ? 'filled star' : 'open star'}>★</div>);
    }
    var interests = ['Signed', 'Verbal', 'Soft Verbal', 'High', 'Medium', 'Low', 'None'];
    var interestDivs = interests.map(function(i) {
      return <div className={'interest ' + i.toLowerCase().replace(' ', '-')}>{i}</div>;
    });
    return <div className="player-card">
      <img className="head-shot" src={photoUrl}/>
      <div className="info">
        <div className="position">{y.primaryPosition.abbreviation}</div>
        <div className="stars">{stars}</div>
        <h1>{p.name}</h1>
      </div>
      <div className="interests">{interestDivs}</div>
    </div>;
  }
});

if (document.location.href.indexOf('players') > -1) {
  $.getJSON(
    'http://api.scout.com//topic/players/search?from=0&size=27&team="USC"&sortBy=CommitDate&category=Football+Recruiting&classYear=2015&league=HS',
    function(players) {
      var playerCards = players.searchResults.results.map(function(p) {
        return <PlayerCard player={p}/>;
      });

      React.render(
        <div>{playerCards}</div>,
        document.getElementById('example')
      );
    });
}
