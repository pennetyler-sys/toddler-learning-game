// Comprehensive Toddler Learning Games
let currentGame = null;
let score = 0;

// Game Configuration
const games = {
    colors: {
        title: '🌈 Color Match',
        colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#C7CEEA'],
        colorNames: ['Red', 'Teal', 'Yellow', 'Mint', 'Lavender']
    },
    numbers: {
        title: '🔢 Learn Numbers',
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    letters: {
        title: '🔤 Learn Letters',
        items: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    },
    animals: {
        title: '🐻 Animal Sounds',
        animals: [
            { name: 'Dog', sound: '🐶 Woof!', emoji: '🐶' },
            { name: 'Cat', sound: '🐱 Meow!', emoji: '🐱' },
            { name: 'Cow', sound: '🐄 Moo!', emoji: '🐄' },
            { name: 'Sheep', sound: '🐑 Baa!', emoji: '🐑' },
            { name: 'Duck', sound: '🦆 Quack!', emoji: '🦆' },
            { name: 'Pig', sound: '🐷 Oink!', emoji: '🐷' }
        ]
    },
    counting: {
        title: '📊 Counting Game',
        maxCount: 10
    },
    memory: {
        title: '🧠 Memory Match',
        pairs: 6
    }
};