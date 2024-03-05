export const validateEmail = (email: string) => {
  let atFound = 0;
  if (email.trim() === '' || email.length > 256) return false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      atFound++;
      if (i === 0 || i === email.length - 1) return false;
      if (email[i + 1] === '.' || email[i - 1] === '.') return false;
      if (email[i + 1] === '@' || email[i - 1] === '@') return false;
    }

    if (email[i] === '.' && email[i + 1] === '.') return false;

    if (email[i] === '.' && i === 0) return false;

    if (email[i] === '.' && email.slice(i + 1).length < 2) return false;
  }
  if (atFound !== 1) return false;

  return true;
};

type TSuite = 'Diamonds' | 'Hearts' | 'Spades' | 'Clubs' | 'Joker';

type TAnimal = 'Lion' | 'Fox' | 'Parrot' | 'Seal' | 'Snake';

type TFruit = 'Apple' | 'Bananas' | 'Mango' | 'Watermelon' | 'Papaya';

export const probabilityToBeatBoss = (
  suite: TSuite,
  animal: TAnimal,
  fruit: TFruit,
) => {
  const total = data.length;
  const filteredData = data.filter(
    item =>
      item['Card Suit'] === suite &&
      item['Animal Name'] === animal &&
      item.Fruit === fruit,
  );

  const result = filteredData.filter(item => item.Result === 'True').length;

  return `${((result / total) * 100).toFixed(1)}%`;
};

const data = [
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Lion',
    Fruit: 'Apple',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Fox',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Parrot',
    Fruit: 'Mango',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Seal',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Watermelon',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Fox',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Seal',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Parrot',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Seal',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Lion',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Parrot',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Mango',
    Result: 'True',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Parrot',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Mango',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Lion',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Fox',
    Fruit: 'Watermelon',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Apple',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Parrot',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Parrot',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Seal',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Seal',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Parrot',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Parrot',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Lion',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Fox',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Parrot',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Fox',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Seal',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Parrot',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Seal',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Lion',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Parrot',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Mango',
    Result: 'True',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Parrot',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Seal',
    Fruit: 'Watermelon',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Seal',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Parrot',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Parrot',
    Fruit: 'Bananas',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Lion',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Fox',
    Fruit: 'Papaya',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Lion',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Fox',
    Fruit: 'Bananas',
    Result: 'False',
  },
  {
    'Card Suit': 'Spades',
    'Animal Name': 'Seal',
    Fruit: 'Papaya',
    Result: 'True',
  },
  {
    'Card Suit': 'Clubs',
    'Animal Name': 'Parrot',
    Fruit: 'Mango',
    Result: 'False',
  },
  {
    'Card Suit': 'Joker',
    'Animal Name': 'Snake',
    Fruit: 'Apple',
    Result: 'False',
  },
  {
    'Card Suit': 'Hearts',
    'Animal Name': 'Fox',
    Fruit: 'Watermelon',
    Result: 'True',
  },
  {
    'Card Suit': 'Diamonds',
    'Animal Name': 'Seal',
    Fruit: 'Bananas',
    Result: 'False',
  },
];
