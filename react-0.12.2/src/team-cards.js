var React = React || {};

var teamCards = [
  {
    name: 'Stadium',
    quantity: 3,
    cost: 5,
    staysInPlay: true,
    description: 'Advance one cube on all Recruits with active interest. Start one interest level higher on new Recruits.'
  },
  {
    name: 'Improved Facilities',
    quantity: 4,
    cost: 4,
    staysInPlay: true,
    description: 'Draw 1 extra card when drawing team cards'
  },
  {
    name: 'Zealous Booster Club',
    quantity: 4,
    cost: 2,
    staysInPlay: true,
    scandal: true,
    description: 'Draw 1 extra card when drawing team cards'
  },
  {
    name: 'Scout',
    quantity: 3,
    cost: 4,
    staysInPlay: true,
    description: 'Draw a Recruit, and optionally place a cube on the Low position as a free action each turn.'
  },
  {
    name: 'Secret House',
    quantity: 3,
    cost: 2,
    scandal: true,
    staysInPlay: true,
    description: 'Once per turn, you may advance one cube for free.'
  },
  {
    name: 'Secret Car',
    quantity: 4,
    cost: 2,
    scandal: true,
    staysInPlay: true,
    description: '+1 Card when using the Play Team Card action.'
  },
  {
    name: 'Endowment',
    quantity: 4,
    cost: 5,
    scandal: false,
    staysInPlay: true,
    description: '+1 Card when using the Play Team Card action.'
  },
  {
    name: 'Envelope of Cash',
    quantity: 8,
    cost: 1,
    scandal: true,
    staysInPlay: true,
    description: 'Move any cube one position'
  },
  {
    name: 'Match Victory!',
    quantity: 4,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Choose another player. Advance your cube by one and move their cube back one for any Recruits that have a cube from both you and the other player.'
  },
  {
    name: 'Camp',
    quantity: 6,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Advance all cubes of Medium or High interest by one.'
  },
  {
    name: 'Visit',
    quantity: 8,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'On a Recruit you have a cube, move any cube one space.'
  },
  {
    name: 'Recruit Loses',
    quantity: 8,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Remove a +1 Rating token on any Recruit'
  },
  {
    name: 'Recruit Wins',
    quantity: 8,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Add a +1 Rating token on any Recruit'
  },
  {
    name: 'Injury',
    quantity: 4,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Add a -1 Rating token on any Recruit'
  },
  {
    name: 'Surgery',
    quantity: 4,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Remove a -1 Rating token on any Recruit'
  },
  {
    name: 'SCANDAL!',
    quantity: 3,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    className:'small-text',
    description: 'Play immediately when drawn. If you have any scandal cards in play, add up the cost of your scandal cards. Move your cubes back by that many. Discard all scandal cards. If you have no scandal cards, pick another player.'
  },
  {
    name: 'Strength of Program',
    quantity: 3,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'For each Recruit you have Committed, advance a cube on a Recruit of equal or lesser rating.'
  },
  {
    name: 'COUNTDOWN TO SIGNING DAY!',
    quantity: 4,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    className: 'small-text',
    description: 'Play immediately when drawn. Advance the leading cube(s) on each Recruit by one space. Committed players Sign LOIs. Reduce the Countdown to Signing Day die by 1.'
  },
  {
    name: 'Rankings Change',
    quantity: 3,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Add one +1 or -1 Rating token to 1 or 2 players'
  },
  {
    name: 'Needed Position',
    quantity: 5,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Draw a Needed Position from the Positions deck.'

  }
];

var positions = [ 'QB', 'WR', 'OT', 'DT', 'TE', 'S', 'CB'].map(function(pos) {
  return {
    name: 'Needed Position: ' + pos,
    quantity: 3,
    staysInPlay: true,
    description: 'When scoring, +1 Rating to one ' + pos
  };
});

teamCards = teamCards.concat(positions);

if (document.location.href.indexOf('teams') > -1) {
  var TeamCard = React.createClass({
    render: function() {
      var t = this.props.teamCard;
      var codes = [];
      if (t.scandal) {
        codes.push('S!');
      }
      if (t.staysInPlay) {
        codes.push('P');
      }
      return <div className={'team-card ' + t.className}>
        {t.cost ? 
        <div className="cost">{t.cost}</div>
        : null }
        {codes.length ? 
        <div className="codes">{codes.join(' ')}</div>
        : null}
        <h1>{t.name}</h1>
        <p>{t.description}</p>
      </div>;
    }
  });

  var cards = [];
  teamCards.forEach(function(card) {
    for(var i = 0; i < card.quantity; i++) {
      cards.push(<TeamCard teamCard={card}/>);
    }
  });

  React.render(<div>{cards}</div>, document.getElementById('example'));
}
