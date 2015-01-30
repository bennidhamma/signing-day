/* global React */

var PlayerCard = React.createClass({
  render: function() { 
    var p = this.props.player;
    var stars = [];
    for (var i = 1; i <= 5; i++) {
      stars.push(<div className={i <= p.rating ? 'fille-star' : 'open-star'}/>);
    }
    return <div>
      <img class="head-shot" src={p.player.photoUrl}/>
      <div class="stars">{stars}</div>
    </div>
  }
});

var player = {
  photoUrl: 'http://imgix.scout.com/132/1325338.jpg?w=240&h=240&fit=crop&crop=faces',
  rating: 4,
  name: 'Kahlil McKenzie'
};

React.render(
  <PlayerCard player={player}/>
  document.getElementById('example')
);
