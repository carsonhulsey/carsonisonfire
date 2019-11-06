console.log("Bots be like...");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var fs = require('fs');

var params;

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
        result_type: 'mixed',
        lang: 'en'
    }
    T.get('search/tweets', params, function (err, data) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, function (err, response) {
                if(response) {
                    console.log('Retweeted');
                }
                if (err) {
                    console.log(err);
                    console.log('Problem');
                }
            });
        }
        else {
            console.log('could not search');
        }
    });
};

retweet();

const dir = 'images'

var files = fs.readdirSync(dir);

var stream = T.stream('statuses/filter', {
    track: '@okboomer_bot'
})

stream.on('tweet', function(tweet) {
    var file = dir + "/" + files[Math.floor(Math.random() * files.length)];
    
    var id = tweet['id_str'];
    var name = tweet['user']['screen_name'];
}

