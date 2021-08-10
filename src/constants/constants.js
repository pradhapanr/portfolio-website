export const projects = [
  {
    title: 'GPX Parser',
    description: `A full stack application created for the simple handling of GPX files. 
                  Parser was written in C and connected to JavaScript applet with the ffi-napi
                  library. Back end is managed with Node and Express, connected to a mySQL
                  database for storage of user GPX files.`,
    image: '/images/1.png',
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
    image: '/images/2.png',
    tags: ['Python', 'Excel', 'Rest API'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'BComp Bot',
    description: `Fully featured discord bot made for the Guelph Bachelor of Computing Discord Bot
                  Hackathon. Leaderboard functionalities allow for easy viewings of players rankings
                  in the games League of Legends and chess (lichess.com elo). Uses the Lichess API
                  to allow users to create chess matches with various settings in one simple command
                  in Discord. All data was stored in MongoDB using document schemas made in JavaScript.`,
      image: '/images/3.png',
      tags: ['JavaScript', 'Node', 'AWS', 'MongoDB'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'University Store',
    description: `Java program that acts as an example interface for an online store for supplies
                  such as textbooks and electronics for the average university student. Created with
                  key object oriented programming concepts in mind such as inheritance, abstraction, 
                  and encapsulation. Also utilized various data structures such as HashMaps and 
                  Linked Lists wherever appropriate.`,
    image: '/images/4.png',
    tags: ['Java', 'Gradle', 'OOP'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Admitted for Honors Computer Science at the University of Guelph', },
  { year: 2019, text: 'Joined the Society of Computing and Information Science at Guelph and worked alongside alumni', },
  { year: 2020, text: 'Attended my first hackathon at StarterHacks 2020', },
  { year: 2021, text: 'Started freelance work for Edge Gamers Lounge, a video game arcade in Wisconsin', },
];