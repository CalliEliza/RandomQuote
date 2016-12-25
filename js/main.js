/**
 * Created by chewy on 12/25/16.
 */
$(document).ready(function(){
    var quotes=[
        {
            quote: "The smallest minority on earth ist he individual",
            name: "Ayn Rand"
        },
        {
            quote: "We are all atheists about most of the gods that societies have ever believed in. Some of us just go one god further.",
            name: "Richard Dawkins"
        },
        {
            quote:"I am against religion because it teaches us to be satisfied with not understanding the world.",
            name: "Richard Dawkins"
        },
        {
            quote:"If you ever start taking things too seriously, just remember that we are talking monkeys on a n organic spaceshipf lying through the universe.",
            name:"Joe Rogan"
        },
        {
            quote:"Be yourself; everyone else is already taken.",
            name:"Oscar Wilde"
        },
        {
            quote:"Do not take life too seriously. You will never get out of it alive.",
            name:"Elbert Hubbard"
        },
        {
            quote: "The essence of life is statistical improbability on a colossal scale.",
            name: "Richard Dawkins"
        },
        {
            quote: "Happiness is that state of consciousness which proceeds from the achievement of one's values.",
            name: "Ayn Rand"
        },
        {
            quote:"A pessimist sees only the dark side of the clouds, and mopes; a philosopher sees both sides, and shrugs; an optimist doesn't see the clouds at all - he's walking on them.",
            name: "Leonard Louis Levinson"
        },
        {
            quote:"A two-year-old is kind of like having a blender, but you don't have a top for it.",
            name: "Jerry Seinfeld"
        },
        {
            quote: "Where lipstick is concerned, the important thing is not color, but to accept God's final word on where your lips end.",
            name: "Jerry Seinfeld"
        },
        {
            quote: "People fear death even moroe than pain. It's strange that they fear death. Life hurts a lot more than death. At the point of death, the pain is over.",
            name: "Jim Morrison"
        },
        {
            quote: "As an atheist, I am angry that we live in a society in which the plain truth cannot be spoken without offending 90% of the population.",
            name: "Sam Harris"
        },
        {
            quote: "Almost all our suffering is the product of our thoughts. We spend nearly every moment of our lives lost in thought, and hostage to the character of those thoughts. You can break this spell, but it takes training just like it takes training to defend yourself against a physical assault.",
            name: "Sam Harris"
        },
        {
            quote: "Science is the most durable and nondivisive way of thinking about the human circumstance. It transcends cultural, national, and political boundaries. You don't have American science versus Canadian science versus Japanese science.",
            name: "Sam Harris"
        },
        {
            quote: "Life shrinks or expands in proportion to one's courage.",
            name: "Anais Nin"
        },
        {
            quote: "So many books, so little time.",
            name: "Frank Zappa"
        },
        {
            quote: "A room without books is like a body without a soul.",
            name: "Marcus Cicero"
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.",
            name: "Robert Frost"
        },
        {
            quote: "No one can make you feel inferior without your consent.",
            name:"Eleanor Roosevelt"
        }
    ];


    $('#newqt').click(function(e) {
        //defines targets
        var quote = $("#qod-text").text();
        var quoteAuthor = $("#qod-author").text();
        // prevents default
        e.preventDefault();
        // get random number
        var length = quotes.length;
        var randomNum = Math.floor(Math.random()*length);
        //sets new quote
        for (i = 0;i<=length;i++) {
            newQ = quotes[randomNum].quote;
            var newQAuth = quotes[randomNum].name;
            var timeAnimation = 500;
            var quoteContainer = $("#qod-quote");
            quoteContainer.fadeOut(timeAnimation, function() {
                quoteContainer.html('');
                quoteContainer.append('<p>'+newQ+'</p>'+'<p id ="quod-author">'+'-'+newQAuth+'</p>');
                quoteContainer.fadeIn(timeAnimation);
            });
            break;
        };		//end of getting quote
    }); //end of initial funciton
    //tweets out quote
    $("#twt").click(function(e) {
        var textToTweet = newQ;
        e.preventDefault();
        var twtLink = 'http://twitter.com/home?status='+encodeURIComponent(textToTweet);
        window.open(twtLink, '_blank');
    })
}); //end of entire file
