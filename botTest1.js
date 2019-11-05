console.log("Bots be like...");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params
T.get('search/tweets', { q: 'Ok boomer', count: 10 }, function(err, data, response) {
  console.log(data)
})

var stream = T.stream('statuses/filter', {track: ['@okboomer_bot']});
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
    
    var name = tweet.user.screen_name;
    
    var nameID = tweet.id_str;
    
    var reply = "@" + name + " " + "ok boomer";
    
    var params = {
        status: reply,
        in_reply_to_status_id: nameID
    };
    T.post('statuses/update', params, function(err, data, response) {
        if (err !== undefined) {
        } else {
            console.log('Tweeted: ' + params.status);
        }
    })
};

var retweet = function () {
    var params = {
        q: 'ok boomer, #okboomer',
        result_type: 'recent',
        lang: 'en'
    }
    Twitter.get('search/tweets', params, function(err, data) {
        if(!err) {
            if(data.statuses[0].retweet_count > 30) {
                
                var retweetId = data.statuses[0].id_str;
                Twitter.post('statuses/retweet/:id', {
                    id: retweetId
                }, function (err, response) {
                    if(response) {
                        console.log('Retweeted!!!');
                    }
                    if(err){
                        console.log(err);
                        console.log('Problem when retweeting. Possibly already retweeted.');
                    }
                });
            }
        }
        else {
            console.log('Error during tweet search');
        }
    });
};
