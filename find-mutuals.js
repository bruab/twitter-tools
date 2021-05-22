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

const followers = await twitterClient.v2.followers(user.data.id);

console.log(followers.data);
