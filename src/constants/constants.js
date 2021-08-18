export const projects = [
  {
    title: 'GPX Parser',
    description: `A full stack application created for the simple handling of GPX files. 
                  Parser was written in C and connected to JavaScript applet with the ffi-napi
                  library. Back end is managed with Node and Express, connected to a mySQL
                  database for storage of user GPX files.`,
    image: '/images/parser.png',
    tags: ['C', 'JavaScript', 'Express', 'MySQL'],
    source: 'https://github.com/pradhapanr/GPXParser',
    visit: 'https://github.com/pradhapanr/GPXParser',
    id: 0,
  },
  {
    title: 'League Excel',
    description:`A terminal based program that uses the Riot Games API to retrieve in depth 
                 statistics of players in the game League of Legends. Statistics were then 
                 stored in formatted Excel files with a color coded format to allow for easy 
                 parsing by the user.`,
    image: '/images/excel.png',
    tags: ['Python', 'Excel', 'Rest API'],
    source: 'https://github.com/pradhapanr/LeagueExcel',
    visit: 'https://github.com/pradhapanr/LeagueExcel',
    id: 1,
  },
  {
    title: 'BComp Bot',
    description: `Fully featured discord bot made for the Guelph Bachelor of Computing Discord Bot
                  Hackathon. Leaderboard functionalities allow for easy viewings of players rankings
                  in the games League of Legends and chess (Lichess API). Connected to MongoDB Atlas
                   and hosted on an AWS EC2 instance.`,
      image: '/images/leaderboard.png',
      tags: ['JavaScript', 'Node', 'AWS', 'MongoDB'],
    source: 'https://github.com/pradhapanr/DiscordBot',
    visit: 'https://github.com/pradhapanr/DiscordBot',
    id: 2,
  },
  {
    title: 'Pokedex',
    description: `Flutter program designed for Android and iOS that displays all 151 original pokemon.
                  Multiple page design with navigator class to traverse the application. Fetched data
                  from public pokemon API to provide in depth statistics about each individual pokemon.
                  `,
    image: '/images/pokedex.png',
    tags: ['Flutter', 'UI/UX design', 'Mobile App'],
    source: 'https://github.com/pradhapanr/pokeflutter',
    visit: 'https://github.com/pradhapanr/pokeflutter',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Admitted for Honors Computer Science at the University of Guelph', },
  { year: 2019, text: 'Joined the Society of Computing and Information Science at Guelph and worked alongside alumni', },
  { year: 2020, text: 'Attended my first hackathon at StarterHacks 2020', },
  { year: 2021, text: 'Started freelance work for Edge Gamers Lounge, a video game arcade in Wisconsin', },
];