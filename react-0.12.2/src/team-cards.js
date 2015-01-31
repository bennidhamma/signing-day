var teamCards = [
  {
    name: 'Stadium',
    quantity: 3,
    cost: 4,
    staysInPlay: true,
    description: 'Advance one cube on all Recruits with active interest. Start one interest level higher on new Recruits.'
  },
  {
    name: 'Improved Facilities',
    quantity: 3,
    cost: 4,
    staysInPlay: true,
    description: 'When drawing Team cards, draw until you have 7 cards in your hand.'
  },
  {
    name: 'Scout',
    quantity: 3,
    cost: 3,
    staysInPlay: true,
    description: 'Draw a Recruit, and optionally place a cube on the None position as a free action each turn.'
  },
  {
    name: 'Secret House',
    quantity: 1,
    cost: 3,
    scandal: true,
    staysInPlay: true,
    description: 'Once per turn, you may advance one cube.'
  },
  {
    name: 'Secret Car',
    quantity: 2,
    cost: 3,
    scandal: true,
    staysInPlay: true,
    description: '+1 Card when using the Play Team Card action.'
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
    name: 'Scholarship',
    quantity: 6,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Advance a cube by 2 spaces.'
  },
  {
    name: 'Visit',
    quantity: 8,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'On any one Recruit you have a cube of at least Medium, advance the cube by one space.'
  },
  {
    name: 'Recruit Loses',
    quantity: 8,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Add a -1 Rating token on any Recruit'
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
    name: 'SCANDAL!',
    quantity: 2,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Play immediately when drawn. If you have any scandal cards in play, add up the cost of your scandal cards. Move your cubes back by that many. If you have no scandal cards, you may choose another player to apply the effect to.'
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
    name: 'COUTNDOWN TO SIGNING DAY!',
    quantity: 4,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Play immediately when drawn. Advance the leading cube on each Recruit by one space. Committed players Sign LOIs. Reduce the Countdown to Signing Day die by 1.'
  },
  {
    name: 'Rankings Change',
    quantity: 3,
    cost: 0,
    scandal: false,
    staysInPlay: false,
    description: 'Add one +1 or -1 Rating token to 1 or 2 players'
  },
];

var positions = [ 'QB', 'WR', 'OT', 'DT', 'TE', 'S', 'CB'].map(function(pos) {
  return {
    name: 'Needed Position: ' + pos,
    quantity: 3,
    staysInPlay: true,
    description: 'At end of game, add # +1 Rating tokens * # +1 Rating tokens for one ' + pos
  } 
});

teamCards = teamCards.concat(positions);
