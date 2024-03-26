interface QuestionProps {
  question: string;
  answers: Answer[];
}

interface Player {
  name: string;
  points: number;
}

interface Answer {
  text: string;
  isCorrect: boolean;
}

export const QUESTIONS_AND_ANSWER: QuestionProps[] = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    answers: [
      { text: "Jane Austen", isCorrect: false },
      { text: "Charles Dickens", isCorrect: false },
      { text: "Mark Twain", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Blue whale", isCorrect: true },
      { text: "Elephant", isCorrect: false },
      { text: "Giraffe", isCorrect: false },
      { text: "Hippopotamus", isCorrect: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", isCorrect: true },
      { text: "Dollar", isCorrect: false },
      { text: "Euro", isCorrect: false },
      { text: "Pound", isCorrect: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Claude Monet", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "CO2", isCorrect: false },
      { text: "O2", isCorrect: false },
      { text: "H2O", isCorrect: true },
      { text: "CH4", isCorrect: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", isCorrect: false },
      { text: "India", isCorrect: false },
      { text: "Australia", isCorrect: false },
      { text: "Japan", isCorrect: true },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Isaac Newton", isCorrect: true },
      { text: "Albert Einstein", isCorrect: false },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Stephen Hawking", isCorrect: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true },
      { text: "Arctic Ocean", isCorrect: false },
    ],
  },
  {
    question: 'Who wrote "Harry Potter"?',
    answers: [
      { text: "George R.R. Martin", isCorrect: false },
      { text: "Stephen King", isCorrect: false },
      { text: "J.K. Rowling", isCorrect: true },
      { text: "Dan Brown", isCorrect: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", isCorrect: false },
      { text: "Onion", isCorrect: false },
      { text: "Lime", isCorrect: false },
      { text: "Avocado", isCorrect: true },
    ],
  },
  {
    question: "What year did the Titanic sink?",
    answers: [
      { text: "1920", isCorrect: false },
      { text: "1912", isCorrect: true },
      { text: "1900", isCorrect: false },
      { text: "1930", isCorrect: false },
    ],
  },
  {
    question: "Which country is famous for the Taj Mahal?",
    answers: [
      { text: "Egypt", isCorrect: false },
      { text: "India", isCorrect: true },
      { text: "China", isCorrect: false },
      { text: "Italy", isCorrect: false },
    ],
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      { text: "Arabian Desert", isCorrect: false },
      { text: "Gobi Desert", isCorrect: false },
      { text: "Kalahari Desert", isCorrect: false },
      { text: "Sahara Desert", isCorrect: true },
    ],
  },
  {
    question: "Who is the CEO of Tesla?",
    answers: [
      { text: "Jeff Bezos", isCorrect: false },
      { text: "Tim Cook", isCorrect: false },
      { text: "Elon Musk", isCorrect: true },
      { text: "Satya Nadella", isCorrect: false },
    ],
  },
  {
    question: "What is the national sport of Canada?",
    answers: [
      { text: "Lacrosse", isCorrect: false },
      { text: "Basketball", isCorrect: false },
      { text: "Ice Hockey", isCorrect: true },
      { text: "Baseball", isCorrect: false },
    ],
  },
  {
    question: 'Which animal is known as the "King of the Jungle"?',
    answers: [
      { text: "Lion", isCorrect: true },
      { text: "Tiger", isCorrect: false },
      { text: "Bear", isCorrect: false },
      { text: "Elephant", isCorrect: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", isCorrect: false },
      { text: "Kangchenjunga", isCorrect: false },
      { text: "Lhotse", isCorrect: false },
      { text: "Mount Everest", isCorrect: true },
    ],
  },
  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Nikola Tesla", isCorrect: false },
      { text: "Alexander Graham Bell", isCorrect: false },
      { text: "Albert Einstein", isCorrect: false },
      { text: "Thomas Edison", isCorrect: true },
    ],
  },
];

export const PLAYERS: Player[] = [
  { name: "John", points: 1500 },
  { name: "Jane", points: 1200 },
  { name: "Michael", points: 1100 },
  { name: "Emily", points: 1050 },
  { name: "William", points: 1000 },
  { name: "Olivia", points: 950 },
  { name: "James", points: 900 },
  { name: "Sophia", points: 850 },
  { name: "David", points: 800 },
  { name: "Emma", points: 750 },
];
