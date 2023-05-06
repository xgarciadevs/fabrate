/**
 * Jokes
 * @description Get a random joke sent back after function has been ran.
 * @nsfw This function does not contain Not-Safe-For-Work content.
 * @updated Fri May 5, 2023
 */

export const Jokes = () => {
  var jokes = [
    'Today at the bank, an old lady asked me to help check her balance. So I pushed her over.',
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
    'I told my girlfriend she drew her eyebrows too high. She seemed surprised.',
    'My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.',
    "I'm so good at sleeping. I can do it with my eyes closed.",
    'My boss told me to have a good day.. so I went home.',
    'Why is Peter Pan always flying? He neverlands.',
    'A woman walks into a library and asked if they had any books about paranoia. The librarian says they are right behind you!',
    "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.",
    'Why do blind people hate skydiving? It scares the hell out of their dogs.',
    'When you look really closely, all mirrors look like eyeballs.',
    "My friend says to me: What rhymes with orange I said: No it doesn't",
    'What do you call a guy with a rubber toe? Roberto.',
    'What did the pirate say when he turned 80 years old? Aye matey.',
    'My wife told me I had to stop acting like a flamingo. So I had to put my foot down.',
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "Why did the old man fall in the well? Because he couldn't see that well.",
    'I ate a clock yesterday, it was very time consuming.',
    'Whatdya call a frenchman wearing sandals? Phillipe Phillope.',
    'A blind man walks into a bar. And a table. And a chair.',
    'I know a lot of jokes about unemployed people but none of them work.',
    "What's orange and sounds like a parrot? A carrot.",
    'Did you hear about the italian chef that died? He pasta way.',
    "Why couldn't the bicycle stand up? Because it was two tired!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    'My wife accused me of being immature. I told her to get out of my fort.',
    'Where do you find a cow with no legs? Right where you left it.',
    "When a deaf person sees someone yawn do they think it's a scream?",
    'As I suspected, someone has been adding soil to my garden. The plot thickens.',
    'How do crazy people go through the forest? They take the physco path.',
    'And the lord said unto John, Come forth and you will receive eternal life. John came fifth and won a toaster.',
    "What did the traffic light say to the car? Don't look! I'm about to change.",
    'I just wrote a book on reverse psychology. Do *not* read it!',
    "What did one hat say to the other? You stay here. I'll go on ahead.",
    "Why wouldn't the shrimp share his treasure? Because he was a little shellfish.",
    "Two cows are standing in a field. One cow says Did you hear about that outbreak of mad cow disease? It makes cows go completely insane!. The other cow replies Good thing I'm a helicopter.",
    'What did the left eye say to the right eye? Between you and me, something smells.',
    'What did the father tomato say to the baby tomato whilst on a family walk? Ketchup.',
    'Why is there a fence around a cemetery? People are dying to get in.',
    'Did you hear about the kidnapping in the park? They woke him up.',
    'How does Darth Vader like his toast? On the dark side.',
    "When will the little snake arrive? I don't know but he won't be long...",
    'Why do fish live in salt water? Because pepper makes them sneeze!',
    'What has three letters and starts with gas. A Car.',
    "How do you get an astronaut's baby to sleep? You rocket!",
    "I think i would like a job cleaning mirrors, it's just something I could really see myself doing.",
    'Why did it take so long for the pirates to learn the Alphabet? They got stuck at C.',
    'I took the shell off my racing snail thinking it would make him go faster, if anything it made him more sluggish.',
    "Somebody stole my microsoft office and they're going to pay - you have my Word.",
    'Just remember - you never really completely useless, you can always serve as a bad example.',
  ];
  var joke = jokes[Math.floor(Math.random() * jokes.length)];
  return joke;
};
