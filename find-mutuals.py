#!/usr/bin/env python3
import os
import twitter

# Read Twitter key / token / secrets from environment variables
consumer_key = os.environ["consumer_key"]
consumer_secret = os.environ["consumer_secret"]
access_token_key = os.environ["access_token_key"]
access_token_secret = os.environ["access_token_secret"]

api = twitter.Api(consumer_key=consumer_key,
                  consumer_secret=consumer_secret,
                  access_token_key=access_token_key,
                  access_token_secret=access_token_secret)


users = api.GetFriends()

print([u.screen_name for u in users])

## FIND MUTUALS
# Get all following


# Get all followers


# Print mutuals
