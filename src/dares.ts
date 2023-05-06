/**
 * Dares
 * @description Get a random dare sent back after function has been ran.
 * @nsfw This function does not contain Not-Safe-For-Work content.
 * @updated Fri May 5, 2023
 */

export const Dares = () => {
  var dares = [
    'Sing a song.',
    "Post 'I love English!' on social media.",
    'Say the English alphabet backwards.',
    'Give someone near you a compliment.',
    'Show the last photo you took with your phone.',
    'Do your best dance.',
    'Act like a cat.',
    'Act like a monkey and a donkey at the same time.',
    "Introduce yourself to someone you don't know.",
    'Smell the inside of your shoe.',
    'Call someone and ask if they believe in aliens.',
    'Act like a pirate.',
    'Talk about the last time you apologized.',
    'Act like you are swimming.',
    'Say the months of the year backwards.',
    'Call your crush and tell them you like cheese.',
    'Call someone in your family and tell them that your pet floats in chips, then mimic what they say.',
  ];
  var dare = dares[Math.floor(Math.random() * dares.length)];
  return dare;
};
