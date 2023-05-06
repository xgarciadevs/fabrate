/**
 * Shower Thoughts
 * @description Get a random shower thought sent back after function has been ran.
 * @nsfw This function does contain Not-Safe-For-Work content.
 * @updated Fri May 5, 2023
 */

export const ShowerThoughts = () => {
  var showerThoughts = [
    'If someone invented walking, how did people get around before.',
    "The Truman show probably could've ended much earlier if Truman just said the n-word.",
    "Dora the Explorer is visually impaired and Boots is her service animal because she never sees what she's looking for unless Boots (and viewers) helps her out.",
    "Harry Potter books would've ended a lot sooner if Voldemort tried to kill baby Harry with a large pillow instead of magic.",
    'Voldemort spent most of book 1 grading Defense Against the Dark Arts essays and at some point he had to give an Outstanding to Hermione.',
    "Captain isn't the highest rank, so there could be a Major Obvious who is even better at pointing out things everyone already knows.",
    "There's nothing as tranquil as the brief moment of silence when going under an overpass in the rain.",
    'Read and Lead can be rhymed twice.',
    'If you do a dance with enough confidence, people will love it no matter how stupid it is.',
    "Anxious people often don't respond to emails/texts not because they forget to reply, but because remembering to respond is the reason it takes so long.",
    "You'll never understand how much your parents love you until you have kids of your own but then the cycle continues with your own children.",
    "There's always just as much sky below us as above, there just happens to be a planet blocking the view.",
    'Alcoholism and drug abuse make more sense when you join the workforce.',
    'The fact that extremely loud sound can kill you makes those vibrating air molecules much more dangerous than we think.',
    "You have to pay more to add something to a sandwich, but you don't pay less when you order it without a set component.",
    'Somehow essential oils went from "relaxing lavender" scent to "cures cancer".',
    'The 2 Cs in THICC looks like ass cheeks.',
    'In 20 or 30 years we will be nostalgic about raid shadow legends ads.',
    "In the marvel cinematic universe, there would likely be “Snap-Deniers” that swear it's all a conspiracy/cover up.",
    'How to delete your browser history" is likely the least common search to show up in the search history in proportion to how frequent it is.',
    'The majority of living Britons have seen only one person on the British throne in their lifetime.',
    "Even if Life did come with an instruction manual, most people wouldn't read it.",
    'The most unbelievable thing about Star Wars is that Anakin, a 9 year old boy, made C3PO and no bugs have ever showed up in over 40 years.',
    'There are probably a lot of answering machines sitting in storage which hold the only voice recordings for people who have passed away.',
    'All furniture and mattress stores exist in a binary state of either “grand opening” or “Going out of business liquidation sale”.',
    'Naming a baby makes you think of all the people you have disliked throughout your life.',
    'Mermaids would probably have thick abs from constantly doing dolphin kicks and/or swimming in general.',
    "Considering how many 90s kids were obsessed with Nirvana, it is surprising there aren't tons of teenagers and 20 somethings named Kurt.",
    'Before computers, having to remember multiple passwords probably meant you had a pretty interesting life.',
    'A carpenter is both a breadwinner and a homemaker.',
    'Many people are not working remotely. They are living at work.',
    'Considering how long his fame has lasted, Shakespeare did an incredibly small amount of promotional work.',
    "Boomers are more worried about people playing games, in which you are actively participating and your brain is engaged, than they are television, in which you are doing absolutely nothing and you aren't required to think.",
    "Every butt smack sounds different .. given the butt, it's density, shape, and force of the smack.",
    'It\'s kinda funny that in popular culture vanilla is "thought" of as white and mild, when in fact the vanilla bean is dark black and very strong tasting, there\'s only a small amount in a tub of ice cream.',
    'A kingdom established by Alexander the Adequate would probably still be around.',
    'If superpower healing followed the rules of chemistry, re-growing a chopped off limb would easily take +100,000 calories, necessitating that only obese superheroes could undertake the process as all low BMI people would enter into a hypoglycemic coma.',
    'Tupperware probably makes most of its money replacing stuff stained by tomatoes.',
    'Not giving a shit would actually solve a lot of your problems. But not giving a shit probably created a lot of them, too.',
    'Your attention span is a product that companies fight for.',
    "Evil AI robots are portrayed as humanoid Skynet terminators but they'd probably just be waterproof micro-drones that enter everyone's house through the sewers to finish us off while we sleep.",
    'Reincarnation technically can exist, as the molecules that make up your body, might someday be passed on to make up the body of another organism, perhaps even a human.',
    "The most amazing thing about marvel movies/comics isn't the powers or fantastical adventurers but rather how the entire universe knows how to speak and understand the English language.",
    'Ever since the launch of the first space station, the place with the highest IQ per capita is no longer on earth.',
    'Eventually some asshole will introduce spiders to Mars.',
    'Hogwarts is probably the only school that can separate evil kids into groups then act all surprised when one of them turns out to be evil.',
    'A big milestone of male maturity is when you stop putting up with annoying girls just because they are hot.',
    'Garbagemen know what houses have alcoholics.',
    'We all got so used to the moon that we often forget how cool it actually is to casually see a natural satellite floating in space.',
    'Everybody is made out of food.',
    'Since it consists full of gas molecules, atmosphere is actually the sea that only birds, insects and bats can swim in, and humans are shrimp-like animals that live on the sea floor.',
  ];
  var thought = showerThoughts[Math.floor(Math.random() * showerThoughts.length)];
  return thought;
};
