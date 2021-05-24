// Create a .gephx graph of all mutuals for a user
// Note mutual relationships *between* mutuals
import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
  appKey: process.env.consumer_key,
  appSecret: process.env.consumer_secret,
  accessToken: process.env.access_token_key,
  accessSecret: process.env.access_token_secret
});
 
//const twitterClient = new TwitterApi(process.env.bearer_token);

const USERNAME = 'briandavidhall';

const user = await twitterClient.v2.userByUsername(USERNAME);

const userID = user.data.id;

//const followers = getFollowers(userID);


//let followers = await twitterClient.v2.followers(userID);
let followers = await getFollowers(userID);

async function getFollowers(userID) {
  let followers = await twitterClient.v2.followers(userID);
  let next = followers.meta.next_token;
  console.log(`next token is ${next}`);

  let moarFollowers = await twitterClient.v2.followers(userID, {pagination_token: next});

  let allFollowers = followers.data.concat(moarFollowers.data);
  console.log(allFollowers.length);

  return allFollowers; // TODO
}

// TODO set max_results: 1000 once paging solved :)

/*
const following = await twitterClient.v2.following(userID);

console.log(`following count: ${following.data.length}`);

let mutuals = followers.data.filter(isFollowing);

console.log(`mutuals count: ${mutuals.length}`);

//console.log(mutuals);

function isFollowing(userData) {
  // Given the userData (id, name, username) of a single user
  // return true if they are contained in following
  console.log(`checking ${JSON.stringify(userData)}`);
  return following.data.some(followingUser => followingUser.id === userData.id);
}
*/
