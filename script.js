// Global variables
let currentSection = 'home';
let completedExercises = JSON.parse(localStorage.getItem('completedExercises')) || [];
let earnedStars = parseInt(localStorage.getItem('earnedStars')) || 0;
let currentFilter = 'all';

// Topic content data
const topicContent = {
    variables: {
        title: "📦 Variables - Magic Boxes!",
        content: `
            <div class="topic-explanation">
                <h3>What are Variables?</h3>
                <p>Think of variables like magic boxes that can hold different things! You can put numbers, words, or even pictures inside them.</p>
                
                <div class="code-example">
                    <h4>Example:</h4>
                    <div class="code-editor">
                        <pre># Create a magic box called "my_name"
my_name = "Emma"

# Create another box for my age
my_age = 7

# Let's see what's inside!
print("My name is", my_name)
print("I am", my_age, "years old")</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Variables are like labels on boxes. You can change what's inside anytime!</p>
                </div>
            </div>
        `
    },
    numbers: {
        title: "🔢 Numbers & Math - Let's Calculate!",
        content: `
            <div class="topic-explanation">
                <h3>Python Can Do Math!</h3>
                <p>Python is like a super smart calculator! It can add, subtract, multiply, and divide numbers.</p>
                
                <div class="code-example">
                    <h4>Math Examples:</h4>
                    <div class="code-editor">
                        <pre># Addition
apples = 5
oranges = 3
total_fruits = apples + oranges
print("Total fruits:", total_fruits)

# Multiplication
cookies_per_day = 2
days_in_week = 7
total_cookies = cookies_per_day * days_in_week
print("Cookies in a week:", total_cookies)</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Python can do math faster than any human calculator!</p>
                </div>
            </div>
        `
    },
    strings: {
        title: "📝 Strings - Working with Words!",
        content: `
            <div class="topic-explanation">
                <h3>What are Strings?</h3>
                <p>Strings are just fancy words for text! They're like sentences or words that Python can read and work with.</p>
                
                <div class="code-example">
                    <h4>String Examples:</h4>
                    <div class="code-editor">
                        <pre># Create a string (text)
my_pet = "Fluffy the cat"
my_favorite_color = "blue"

# Combine strings
greeting = "Hello " + my_pet
print(greeting)

# Make strings bigger or smaller
print(my_pet.upper())  # Makes all letters BIG
print(my_pet.lower())  # Makes all letters small</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Strings can contain letters, numbers, and even emojis! 🎉</p>
                </div>
            </div>
        `
    },
    lists: {
        title: "📋 Lists - Keeping Things Organized!",
        content: `
            <div class="topic-explanation">
                <h3>What are Lists?</h3>
                <p>Lists are like shopping lists or toy boxes! They help you keep many things organized in one place.</p>
                
                <div class="code-example">
                    <h4>List Examples:</h4>
                    <div class="code-editor">
                        <pre># Create a list of favorite toys
toys = ["teddy bear", "robot", "puzzle", "blocks"]

# Add something new to the list
toys.append("ball")

# See what's in the list
print("My toys:", toys)
print("First toy:", toys[0])
print("Last toy:", toys[-1])</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Lists can hold anything - numbers, words, or even other lists!</p>
                </div>
            </div>
        `
    },
    loops: {
        title: "🔄 Loops - Repeat, Repeat, Repeat!",
        content: `
            <div class="topic-explanation">
                <h3>What are Loops?</h3>
                <p>Loops help you repeat things over and over without getting tired! It's like saying "do this 10 times" to Python.</p>
                
                <div class="code-example">
                    <h4>Loop Examples:</h4>
                    <div class="code-editor">
                        <pre># Count from 1 to 5
for number in range(1, 6):
    print("Number:", number)

# Say hello to each friend
friends = ["Alice", "Bob", "Charlie"]
for friend in friends:
    print("Hello", friend + "!")</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Loops save you from writing the same code many times!</p>
                </div>
            </div>
        `
    },
    conditions: {
        title: "❓ If Statements - Making Decisions!",
        content: `
            <div class="topic-explanation">
                <h3>What are If Statements?</h3>
                <p>If statements help Python make decisions! It's like saying "if it's sunny, go play outside, otherwise stay inside."</p>
                
                <div class="code-example">
                    <h4>If Statement Examples:</h4>
                    <div class="code-editor">
                        <pre># Check if it's time for bed
bedtime = 8
current_time = 7

if current_time >= bedtime:
    print("Time for bed! 😴")
else:
    print("You can play more! 🎮")

# Check the weather
weather = "sunny"
if weather == "sunny":
    print("Let's go to the park!")
elif weather == "rainy":
    print("Let's read a book inside!")
else:
    print("Let's see what happens!")</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>If statements help programs make smart choices!</p>
                </div>
            </div>
        `
    },
    functions: {
        title: "⚙️ Functions - Your Own Python Tools!",
        content: `
            <div class="topic-explanation">
                <h3>What are Functions?</h3>
                <p>Functions are like special tools you create! Once you make a function, you can use it over and over again.</p>
                
                <div class="code-example">
                    <h4>Function Examples:</h4>
                    <div class="code-editor">
                        <pre># Create a function to say hello
def say_hello(name):
    print("Hello", name + "!")
    print("Nice to meet you!")

# Use the function
say_hello("Emma")
say_hello("Mom")

# Function that adds numbers
def add_numbers(a, b):
    result = a + b
    return result

answer = add_numbers(5, 3)
print("5 + 3 =", answer)</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Functions are like recipes - you write them once and use them many times!</p>
                </div>
            </div>
        `
    },
    turtle: {
        title: "🐢 Turtle Graphics - Draw with Code!",
        content: `
            <div class="topic-explanation">
                <h3>What is Turtle Graphics?</h3>
                <p>Turtle graphics lets you draw pictures using code! It's like having a robot turtle that follows your drawing instructions.</p>
                
                <div class="code-example">
                    <h4>Turtle Examples:</h4>
                    <div class="code-editor">
                        <pre>import turtle

# Create a turtle
t = turtle.Turtle()

# Draw a square
for i in range(4):
    t.forward(100)
    t.right(90)

# Draw a circle
t.circle(50)

# Change colors
t.color("red")
t.forward(100)</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>You can create beautiful art just by writing code!</p>
                </div>
            </div>
        `
    },
    games: {
        title: "🎮 Simple Games - Let's Play!",
        content: `
            <div class="topic-explanation">
                <h3>Making Games with Python!</h3>
                <p>Python can help you create fun games! Even simple games teach you important programming concepts.</p>
                
                <div class="code-example">
                    <h4>Simple Game Example:</h4>
                    <div class="code-editor">
                        <pre># Guess the number game
import random

secret_number = random.randint(1, 10)
print("I'm thinking of a number between 1 and 10!")

guess = int(input("What's your guess? "))

if guess == secret_number:
    print("🎉 You got it right!")
else:
    print("Try again! The number was", secret_number)</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Many popular games are made with programming languages like Python!</p>
                </div>
            </div>
        `
    },
    projects: {
        title: "🚀 Fun Projects - Build Cool Things!",
        content: `
            <div class="topic-explanation">
                <h3>What Can You Build?</h3>
                <p>With Python, you can create amazing projects! From calculators to stories, the possibilities are endless!</p>
                
                <div class="code-example">
                    <h4>Project Ideas:</h4>
                    <div class="code-editor">
                        <pre># Story generator
import random

characters = ["princess", "dragon", "knight", "wizard"]
places = ["castle", "forest", "mountain", "cave"]
actions = ["saves", "finds", "meets", "helps"]

character = random.choice(characters)
place = random.choice(places)
action = random.choice(actions)

story = f"Once upon a time, a {character} went to a {place} and {action} everyone!"
print(story)</pre>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h4>🎉 Fun Fact!</h4>
                    <p>Many famous apps and websites started as simple Python projects!</p>
                </div>
            </div>
        `
    }
};

// Exercise data - 50 interactive exercises
const exercises = [
    // Variables exercises (5)
    { id: 1, topic: 'variables', title: 'My First Variable', difficulty: 'easy', description: 'Create a variable to store your name!', code: '', solution: 'my_name = "Emma"', hint: 'Use = to store something in a variable' },
    { id: 2, topic: 'variables', title: 'Age Variable', difficulty: 'easy', description: 'Store your age in a variable called my_age', code: '', solution: 'my_age = 7', hint: 'Numbers don\'t need quotes around them' },
    { id: 3, topic: 'variables', title: 'Favorite Color', difficulty: 'easy', description: 'Create a variable for your favorite color', code: '', solution: 'favorite_color = "blue"', hint: 'Text needs quotes around it' },
    { id: 4, topic: 'variables', title: 'Change Variables', difficulty: 'medium', description: 'Create a variable, then change its value', code: '', solution: 'x = 5\nx = 10', hint: 'You can change a variable by giving it a new value' },
    { id: 5, topic: 'variables', title: 'Multiple Variables', difficulty: 'medium', description: 'Create three variables: name, age, and school', code: '', solution: 'name = "Emma"\nage = 7\nschool = "Elementary School"', hint: 'Each variable needs its own line' },

    // Numbers exercises (5)
    { id: 6, topic: 'numbers', title: 'Simple Addition', difficulty: 'easy', description: 'Add 5 and 3 together', code: '', solution: '5 + 3', hint: 'Use + for addition' },
    { id: 7, topic: 'numbers', title: 'Subtraction Fun', difficulty: 'easy', description: 'Subtract 2 from 10', code: '', solution: '10 - 2', hint: 'Use - for subtraction' },
    { id: 8, topic: 'numbers', title: 'Multiplication Magic', difficulty: 'easy', description: 'Multiply 4 by 6', code: '', solution: '4 * 6', hint: 'Use * for multiplication' },
    { id: 9, topic: 'numbers', title: 'Division Time', difficulty: 'medium', description: 'Divide 20 by 4', code: '', solution: '20 / 4', hint: 'Use / for division' },
    { id: 10, topic: 'numbers', title: 'Math with Variables', difficulty: 'medium', description: 'Create variables for two numbers and add them', code: '', solution: 'a = 5\nb = 3\nresult = a + b', hint: 'You can use variables in math operations' },

    // Strings exercises (5)
    { id: 11, topic: 'strings', title: 'My First String', difficulty: 'easy', description: 'Create a string with your name', code: '', solution: '"Emma"', hint: 'Strings need quotes around them' },
    { id: 12, topic: 'strings', title: 'String Addition', difficulty: 'easy', description: 'Combine "Hello" and "World"', code: '', solution: '"Hello" + "World"', hint: 'Use + to combine strings' },
    { id: 13, topic: 'strings', title: 'String Length', difficulty: 'medium', description: 'Find the length of the word "Python"', code: '', solution: 'len("Python")', hint: 'Use len() to find string length' },
    { id: 14, topic: 'strings', title: 'Uppercase Fun', difficulty: 'medium', description: 'Make "hello" all uppercase', code: '', solution: '"hello".upper()', hint: 'Use .upper() to make text uppercase' },
    { id: 15, topic: 'strings', title: 'String Variables', difficulty: 'medium', description: 'Create a string variable and print it', code: '', solution: 'greeting = "Hello World"\nprint(greeting)', hint: 'Use print() to display text' },

    // Lists exercises (5)
    { id: 16, topic: 'lists', title: 'My First List', difficulty: 'easy', description: 'Create a list with three colors', code: '', solution: 'colors = ["red", "blue", "green"]', hint: 'Lists use square brackets []' },
    { id: 17, topic: 'lists', title: 'List Access', difficulty: 'easy', description: 'Get the first item from a list', code: '', solution: 'fruits = ["apple", "banana", "orange"]\nfruits[0]', hint: 'Use [0] to get the first item' },
    { id: 18, topic: 'lists', title: 'Add to List', difficulty: 'medium', description: 'Add "grape" to a list of fruits', code: '', solution: 'fruits = ["apple", "banana"]\nfruits.append("grape")', hint: 'Use .append() to add items' },
    { id: 19, topic: 'lists', title: 'List Length', difficulty: 'medium', description: 'Find how many items are in a list', code: '', solution: 'toys = ["doll", "car", "ball"]\nlen(toys)', hint: 'Use len() to count list items' },
    { id: 20, topic: 'lists', title: 'List Slicing', difficulty: 'hard', description: 'Get the first two items from a list', code: '', solution: 'numbers = [1, 2, 3, 4, 5]\nnumbers[0:2]', hint: 'Use [0:2] to get items from index 0 to 1' },

    // Loops exercises (5)
    { id: 21, topic: 'loops', title: 'Count to 5', difficulty: 'easy', description: 'Use a loop to count from 1 to 5', code: '', solution: 'for i in range(1, 6):\n    print(i)', hint: 'Use for loop with range()' },
    { id: 22, topic: 'loops', title: 'Loop Through List', difficulty: 'easy', description: 'Print each item in a list', code: '', solution: 'fruits = ["apple", "banana", "orange"]\nfor fruit in fruits:\n    print(fruit)', hint: 'Use for loop to go through each item' },
    { id: 23, topic: 'loops', title: 'While Loop', difficulty: 'medium', description: 'Count from 1 to 3 using while loop', code: '', solution: 'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1', hint: 'Use while loop with a condition' },
    { id: 24, topic: 'loops', title: 'Loop with Range', difficulty: 'medium', description: 'Print even numbers from 2 to 10', code: '', solution: 'for i in range(2, 11, 2):\n    print(i)', hint: 'Use range(start, stop, step)' },
    { id: 25, topic: 'loops', title: 'Nested Loop', difficulty: 'hard', description: 'Create a pattern with nested loops', code: '', solution: 'for i in range(3):\n    for j in range(3):\n        print("*", end="")\n    print()', hint: 'Use nested loops for patterns' },

    // Conditions exercises (5)
    { id: 26, topic: 'conditions', title: 'Simple If', difficulty: 'easy', description: 'Check if a number is greater than 5', code: '', solution: 'number = 7\nif number > 5:\n    print("Big number!")', hint: 'Use if with comparison operators' },
    { id: 27, topic: 'conditions', title: 'If-Else', difficulty: 'easy', description: 'Check if it\'s sunny or rainy', code: '', solution: 'weather = "sunny"\nif weather == "sunny":\n    print("Go outside!")\nelse:\n    print("Stay inside!")', hint: 'Use else for the opposite case' },
    { id: 28, topic: 'conditions', title: 'Elif Chain', difficulty: 'medium', description: 'Check temperature and give advice', code: '', solution: 'temp = 25\nif temp > 30:\n    print("Too hot!")\nelif temp > 20:\n    print("Perfect!")\nelse:\n    print("Too cold!")', hint: 'Use elif for multiple conditions' },
    { id: 29, topic: 'conditions', title: 'Multiple Conditions', difficulty: 'medium', description: 'Check if age is between 5 and 10', code: '', solution: 'age = 7\nif age >= 5 and age <= 10:\n    print("Elementary school age!")', hint: 'Use and to combine conditions' },
    { id: 30, topic: 'conditions', title: 'Complex Condition', difficulty: 'hard', description: 'Check if someone can vote (age 18+)', code: '', solution: 'age = 20\nif age >= 18:\n    print("You can vote!")\nelse:\n    print("Too young to vote!")', hint: 'Use >= for greater than or equal' },

    // Functions exercises (5)
    { id: 31, topic: 'functions', title: 'Simple Function', difficulty: 'easy', description: 'Create a function that says hello', code: '', solution: 'def say_hello():\n    print("Hello!")', hint: 'Use def to create a function' },
    { id: 32, topic: 'functions', title: 'Function with Parameter', difficulty: 'easy', description: 'Create a function that greets someone', code: '', solution: 'def greet(name):\n    print("Hello", name + "!")', hint: 'Functions can take parameters' },
    { id: 33, topic: 'functions', title: 'Function with Return', difficulty: 'medium', description: 'Create a function that adds two numbers', code: '', solution: 'def add(a, b):\n    return a + b', hint: 'Use return to give back a value' },
    { id: 34, topic: 'functions', title: 'Function Call', difficulty: 'medium', description: 'Call a function with arguments', code: '', solution: 'def multiply(x, y):\n    return x * y\n\nresult = multiply(3, 4)', hint: 'Call functions with function_name()' },
    { id: 35, topic: 'functions', title: 'Default Parameters', difficulty: 'hard', description: 'Create a function with default values', code: '', solution: 'def greet(name="Friend"):\n    print("Hello", name + "!")', hint: 'Use = to set default values' },

    // Turtle exercises (5)
    { id: 36, topic: 'turtle', title: 'Draw a Square', difficulty: 'easy', description: 'Use turtle to draw a square', code: '', solution: 'import turtle\nt = turtle.Turtle()\nfor i in range(4):\n    t.forward(100)\n    t.right(90)', hint: 'Use forward() and right() to draw' },
    { id: 37, topic: 'turtle', title: 'Draw a Circle', difficulty: 'easy', description: 'Draw a circle with turtle', code: '', solution: 'import turtle\nt = turtle.Turtle()\nt.circle(50)', hint: 'Use circle() to draw circles' },
    { id: 38, topic: 'turtle', title: 'Colorful Drawing', difficulty: 'medium', description: 'Draw a red square', code: '', solution: 'import turtle\nt = turtle.Turtle()\nt.color("red")\nfor i in range(4):\n    t.forward(100)\n    t.right(90)', hint: 'Use color() to change colors' },
    { id: 39, topic: 'turtle', title: 'Draw a Triangle', difficulty: 'medium', description: 'Draw a triangle with turtle', code: '', solution: 'import turtle\nt = turtle.Turtle()\nfor i in range(3):\n    t.forward(100)\n    t.left(120)', hint: 'Use left() to turn left' },
    { id: 40, topic: 'turtle', title: 'Draw a Star', difficulty: 'hard', description: 'Draw a star shape', code: '', solution: 'import turtle\nt = turtle.Turtle()\nfor i in range(5):\n    t.forward(100)\n    t.right(144)', hint: 'Stars need 5 sides with 144-degree turns' },

    // Games exercises (5)
    { id: 41, topic: 'games', title: 'Number Guessing', difficulty: 'easy', description: 'Create a simple number guessing game', code: '', solution: 'secret = 7\nguess = int(input("Guess a number: "))\nif guess == secret:\n    print("You win!")\nelse:\n    print("Try again!")', hint: 'Use input() to get user input' },
    { id: 42, topic: 'games', title: 'Rock Paper Scissors', difficulty: 'medium', description: 'Create a simple rock paper scissors game', code: '', solution: 'import random\nchoices = ["rock", "paper", "scissors"]\ncomputer = random.choice(choices)\nprint("Computer chose:", computer)', hint: 'Use random.choice() to pick randomly' },
    { id: 43, topic: 'games', title: 'Dice Roll', difficulty: 'easy', description: 'Simulate rolling a dice', code: '', solution: 'import random\nroll = random.randint(1, 6)\nprint("You rolled:", roll)', hint: 'Use random.randint() for random numbers' },
    { id: 44, topic: 'games', title: 'Word Game', difficulty: 'medium', description: 'Create a word guessing game', code: '', solution: 'word = "python"\nletter = input("Guess a letter: ")\nif letter in word:\n    print("Good guess!")\nelse:\n    print("Try again!")', hint: 'Use in to check if letter is in word' },
    { id: 45, topic: 'games', title: 'Math Quiz', difficulty: 'medium', description: 'Create a simple math quiz', code: '', solution: 'a = 5\nb = 3\nanswer = int(input(f"What is {a} + {b}? "))\nif answer == a + b:\n    print("Correct!")\nelse:\n    print("Wrong!")', hint: 'Use f-strings to format questions' },

    // Projects exercises (5)
    { id: 46, topic: 'projects', title: 'Story Generator', difficulty: 'easy', description: 'Create a simple story generator', code: '', solution: 'import random\ncharacters = ["princess", "knight", "dragon"]\ncharacter = random.choice(characters)\nprint(f"Once upon a time, a {character} went on an adventure!")', hint: 'Use random.choice() to pick random elements' },
    { id: 47, topic: 'projects', title: 'Calculator', difficulty: 'medium', description: 'Create a simple calculator', code: '', solution: 'a = 10\nb = 5\nprint(f"{a} + {b} = {a + b}")\nprint(f"{a} - {b} = {a - b}")\nprint(f"{a} * {b} = {a * b}")\nprint(f"{a} / {b} = {a / b}")', hint: 'Use f-strings for formatted output' },
    { id: 48, topic: 'projects', title: 'Password Generator', difficulty: 'medium', description: 'Generate a simple password', code: '', solution: 'import random\nimport string\npassword = "".join(random.choices(string.ascii_letters, k=8))\nprint("Your password:", password)', hint: 'Use string.ascii_letters for letters' },
    { id: 49, topic: 'projects', title: 'To-Do List', difficulty: 'hard', description: 'Create a simple to-do list', code: '', solution: 'todos = []\ntodos.append("Learn Python")\ntodos.append("Do homework")\nfor i, todo in enumerate(todos, 1):\n    print(f"{i}. {todo}")', hint: 'Use enumerate() to number items' },
    { id: 50, topic: 'projects', title: 'Weather App', difficulty: 'hard', description: 'Create a simple weather checker', code: '', solution: 'import random\ntemp = random.randint(0, 40)\nif temp > 30:\n    weather = "hot"\nelif temp > 20:\n    weather = "warm"\nelse:\n    weather = "cold"\nprint(f"Temperature: {temp}°C, Weather: {weather}")', hint: 'Use random.randint() for temperature' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadExercises();
    updateProgress();
});

function initializeApp() {
    // Set up navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.textContent.includes('Home') ? 'home' :
                          this.textContent.includes('Topics') ? 'topics' :
                          this.textContent.includes('Exercises') ? 'exercises' :
                          this.textContent.includes('Progress') ? 'progress' : 'home';
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.textContent.includes(sectionName.charAt(0).toUpperCase() + sectionName.slice(1))
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    currentSection = sectionName;
}

function showTopic(topicName) {
    const topic = topicContent[topicName];
    if (!topic) return;
    
    const contentDiv = document.getElementById('topic-content');
    contentDiv.innerHTML = `
        <h2>${topic.title}</h2>
        ${topic.content}
        <div class="topic-actions">
            <button class="cta-button" onclick="showSection('exercises')">Try Exercises!</button>
        </div>
    `;
    
    showSection('topic-detail');
}

function loadExercises() {
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';
    
    const filteredExercises = currentFilter === 'all' ? 
        exercises : 
        exercises.filter(ex => ex.topic === currentFilter);
    
    filteredExercises.forEach(exercise => {
        const isCompleted = completedExercises.includes(exercise.id);
        const starsEarned = isCompleted ? 3 : 0;
        
        const exerciseCard = document.createElement('div');
        exerciseCard.className = `exercise-card ${isCompleted ? 'completed' : ''}`;
        exerciseCard.onclick = () => openExerciseModal(exercise);
        
        exerciseCard.innerHTML = `
            <div class="exercise-number">${exercise.id}</div>
            <div class="exercise-title">${exercise.title}</div>
            <div class="exercise-description">${exercise.description}</div>
            <div class="exercise-difficulty difficulty-${exercise.difficulty}">${exercise.difficulty}</div>
            <div class="exercise-stars">
                <span class="star ${starsEarned >= 1 ? 'earned' : ''}">⭐</span>
                <span class="star ${starsEarned >= 2 ? 'earned' : ''}">⭐</span>
                <span class="star ${starsEarned >= 3 ? 'earned' : ''}">⭐</span>
            </div>
        `;
        
        container.appendChild(exerciseCard);
    });
}

function filterExercises(topic) {
    currentFilter = topic;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="filterExercises('${topic}')"]`).classList.add('active');
    
    loadExercises();
}

function openExerciseModal(exercise) {
    const modal = document.getElementById('exercise-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="exercise-modal-content">
            <h2 class="exercise-modal-title">Exercise ${exercise.id}: ${exercise.title}</h2>
            <div class="exercise-instructions">
                <h4>Instructions:</h4>
                <p>${exercise.description}</p>
                <p><strong>Difficulty:</strong> <span class="exercise-difficulty difficulty-${exercise.difficulty}">${exercise.difficulty}</span></p>
            </div>
            
            <div class="code-editor">
                <textarea class="code-input" id="exercise-code" placeholder="Write your Python code here...">${exercise.code}</textarea>
            </div>
            
            <div class="exercise-buttons">
                <button class="run-button" onclick="runCode(${exercise.id})">▶️ Run Code</button>
                <button class="check-button" onclick="checkSolution(${exercise.id})">✅ Check Answer</button>
                <button class="hint-button" onclick="showHint(${exercise.id})">💡 Get Hint</button>
            </div>
            
            <div class="output-area" id="output-${exercise.id}">
                <h4>Output:</h4>
                <div id="output-content-${exercise.id}"></div>
            </div>
            
            <div id="feedback-${exercise.id}"></div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeExerciseModal() {
    document.getElementById('exercise-modal').style.display = 'none';
}

function runCode(exerciseId) {
    const code = document.getElementById('exercise-code').value;
    const outputDiv = document.getElementById(`output-content-${exerciseId}`);
    
    try {
        // Simple Python-like execution simulation
        let output = '';
        
        // Basic code interpretation
        if (code.includes('print(')) {
            const printMatches = code.match(/print\(([^)]+)\)/g);
            if (printMatches) {
                printMatches.forEach(match => {
                    const content = match.replace('print(', '').replace(')', '');
                    output += evalPythonExpression(content) + '\n';
                });
            }
        }
        
        outputDiv.innerHTML = `<pre>${output || 'No output'}</pre>`;
    } catch (error) {
        outputDiv.innerHTML = `<pre style="color: red;">Error: ${error.message}</pre>`;
    }
}

function checkSolution(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const userCode = document.getElementById('exercise-code').value.trim();
    const feedbackDiv = document.getElementById(`feedback-${exerciseId}`);
    
    // Simple solution checking
    const isCorrect = checkCodeCorrectness(userCode, exercise.solution);
    
    if (isCorrect) {
        feedbackDiv.innerHTML = '<div class="feedback correct">🎉 Great job! Your code is correct!</div>';
        
        if (!completedExercises.includes(exerciseId)) {
            completedExercises.push(exerciseId);
            earnedStars += 3;
            localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
            localStorage.setItem('earnedStars', earnedStars.toString());
            updateProgress();
            loadExercises();
        }
    } else {
        feedbackDiv.innerHTML = '<div class="feedback incorrect">❌ Not quite right. Try again!</div>';
    }
}

function showHint(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const feedbackDiv = document.getElementById(`feedback-${exerciseId}`);
    feedbackDiv.innerHTML = `<div class="feedback hint">💡 Hint: ${exercise.hint}</div>`;
}

function checkCodeCorrectness(userCode, solution) {
    // Simple correctness checking - in a real app, this would be more sophisticated
    const normalizedUser = userCode.toLowerCase().replace(/\s+/g, '');
    const normalizedSolution = solution.toLowerCase().replace(/\s+/g, '');
    
    // Special handling for specific exercises
    const exerciseId = getCurrentExerciseId();
    
    // Variables exercises (1-5)
    if (exerciseId === 1) {
        // My First Variable - accept any name variable
        return normalizedUser.includes('my_name=') && /my_name="[^"]*"/.test(normalizedUser);
    }
    
    if (exerciseId === 2) {
        // Age Variable - accept any number
        return normalizedUser.includes('my_age=') && /my_age=\d+/.test(normalizedUser);
    }
    
    if (exerciseId === 3) {
        // Favorite Color - accept any color variable
        return normalizedUser.includes('favorite_color=') && /favorite_color="[^"]*"/.test(normalizedUser);
    }
    
    if (exerciseId === 4) {
        // Change Variables - accept any variable reassignment
        const lines = userCode.split('\n').map(line => line.trim()).filter(line => line);
        if (lines.length >= 2) {
            const firstMatch = lines[0].match(/(\w+)\s*=\s*(.+)/);
            const secondMatch = lines[1].match(/(\w+)\s*=\s*(.+)/);
            return firstMatch && secondMatch && firstMatch[1] === secondMatch[1];
        }
        return false;
    }
    
    if (exerciseId === 5) {
        // Multiple Variables - accept any three variables
        const lines = userCode.split('\n').map(line => line.trim()).filter(line => line);
        if (lines.length >= 3) {
            let validVariables = 0;
            lines.forEach(line => {
                if (line.match(/^\w+\s*=\s*.+$/)) validVariables++;
            });
            return validVariables >= 3;
        }
        return false;
    }
    
    // Numbers exercises (6-10)
    if (exerciseId === 6) {
        // Simple Addition - accept any addition
        return /\d+\s*\+\s*\d+/.test(normalizedUser);
    }
    
    if (exerciseId === 7) {
        // Subtraction - accept any subtraction
        return /\d+\s*-\s*\d+/.test(normalizedUser);
    }
    
    if (exerciseId === 8) {
        // Multiplication - accept any multiplication
        return /\d+\s*\*\s*\d+/.test(normalizedUser);
    }
    
    if (exerciseId === 9) {
        // Division - accept any division
        return /\d+\s*\/\s*\d+/.test(normalizedUser);
    }
    
    if (exerciseId === 10) {
        // Math with Variables - accept variables with addition
        return normalizedUser.includes('a=') && normalizedUser.includes('b=') && 
               normalizedUser.includes('result=') && normalizedUser.includes('+');
    }
    
    // Strings exercises (11-15)
    if (exerciseId === 11) {
        // My First String - accept any string
        return /"[^"]*"/.test(normalizedUser);
    }
    
    if (exerciseId === 12) {
        // String Addition - accept string concatenation
        return /"[^"]*"\s*\+\s*"[^"]*"/.test(normalizedUser);
    }
    
    if (exerciseId === 13) {
        // String Length - accept len() function
        return /len\s*\(\s*"[^"]*"\s*\)/.test(normalizedUser);
    }
    
    if (exerciseId === 14) {
        // Uppercase - accept .upper() method
        return /"[^"]*"\.upper\s*\(\s*\)/.test(normalizedUser);
    }
    
    if (exerciseId === 15) {
        // String Variables - accept string variable with print
        return normalizedUser.includes('=') && normalizedUser.includes('print(') && 
               /"[^"]*"/.test(normalizedUser);
    }
    
    // Lists exercises (16-20)
    if (exerciseId === 16) {
        // My First List - accept any list
        return /\[.*\]/.test(normalizedUser);
    }
    
    if (exerciseId === 17) {
        // List Access - accept list indexing
        return normalizedUser.includes('[') && normalizedUser.includes(']') && 
               normalizedUser.includes('0');
    }
    
    if (exerciseId === 18) {
        // Add to List - accept .append() method
        return normalizedUser.includes('.append(');
    }
    
    if (exerciseId === 19) {
        // List Length - accept len() on list
        return normalizedUser.includes('len(') && normalizedUser.includes('[');
    }
    
    if (exerciseId === 20) {
        // List Slicing - accept list slicing
        return normalizedUser.includes('[') && normalizedUser.includes(':') && 
               normalizedUser.includes(']');
    }
    
    // Loops exercises (21-25)
    if (exerciseId === 21) {
        // Count to 5 - accept for loop with range
        return normalizedUser.includes('for') && normalizedUser.includes('range(') && 
               normalizedUser.includes('print(');
    }
    
    if (exerciseId === 22) {
        // Loop Through List - accept for loop with list
        return normalizedUser.includes('for') && normalizedUser.includes('in') && 
               normalizedUser.includes('print(');
    }
    
    if (exerciseId === 23) {
        // While Loop - accept while loop
        return normalizedUser.includes('while') && normalizedUser.includes('print(');
    }
    
    if (exerciseId === 24) {
        // Loop with Range - accept for loop with step
        return normalizedUser.includes('for') && normalizedUser.includes('range(') && 
               normalizedUser.includes(',');
    }
    
    if (exerciseId === 25) {
        // Nested Loop - accept nested for loops
        return (normalizedUser.match(/for/g) || []).length >= 2;
    }
    
    // Conditions exercises (26-30)
    if (exerciseId === 26) {
        // Simple If - accept if statement
        return normalizedUser.includes('if') && normalizedUser.includes('print(');
    }
    
    if (exerciseId === 27) {
        // If-Else - accept if-else statement
        return normalizedUser.includes('if') && normalizedUser.includes('else');
    }
    
    if (exerciseId === 28) {
        // Elif Chain - accept elif statement
        return normalizedUser.includes('if') && normalizedUser.includes('elif');
    }
    
    if (exerciseId === 29) {
        // Multiple Conditions - accept and/or operators
        return normalizedUser.includes('if') && (normalizedUser.includes('and') || normalizedUser.includes('or'));
    }
    
    if (exerciseId === 30) {
        // Complex Condition - accept comparison operators
        return normalizedUser.includes('if') && (normalizedUser.includes('>=') || normalizedUser.includes('<=') || 
               normalizedUser.includes('>') || normalizedUser.includes('<'));
    }
    
    // Functions exercises (31-35)
    if (exerciseId === 31) {
        // Simple Function - accept function definition
        return normalizedUser.includes('def') && normalizedUser.includes('print(');
    }
    
    if (exerciseId === 32) {
        // Function with Parameter - accept function with parameter
        return normalizedUser.includes('def') && normalizedUser.includes('(') && 
               normalizedUser.includes(')') && normalizedUser.includes('print(');
    }
    
    if (exerciseId === 33) {
        // Function with Return - accept function with return
        return normalizedUser.includes('def') && normalizedUser.includes('return');
    }
    
    if (exerciseId === 34) {
        // Function Call - accept function call
        return normalizedUser.includes('def') && normalizedUser.includes('return') && 
               normalizedUser.includes('=') && normalizedUser.includes('(');
    }
    
    if (exerciseId === 35) {
        // Default Parameters - accept function with default parameter
        return normalizedUser.includes('def') && normalizedUser.includes('=') && 
               normalizedUser.includes('(') && normalizedUser.includes(')');
    }
    
    // Turtle exercises (36-40)
    if (exerciseId === 36) {
        // Draw a Square - accept turtle square drawing
        return normalizedUser.includes('import') && normalizedUser.includes('turtle') && 
               normalizedUser.includes('for') && normalizedUser.includes('forward') && 
               normalizedUser.includes('right');
    }
    
    if (exerciseId === 37) {
        // Draw a Circle - accept turtle circle drawing
        return normalizedUser.includes('import') && normalizedUser.includes('turtle') && 
               normalizedUser.includes('circle');
    }
    
    if (exerciseId === 38) {
        // Colorful Drawing - accept turtle with color
        return normalizedUser.includes('import') && normalizedUser.includes('turtle') && 
               normalizedUser.includes('color');
    }
    
    if (exerciseId === 39) {
        // Draw a Triangle - accept turtle triangle drawing
        return normalizedUser.includes('import') && normalizedUser.includes('turtle') && 
               normalizedUser.includes('for') && normalizedUser.includes('left');
    }
    
    if (exerciseId === 40) {
        // Draw a Star - accept turtle star drawing
        return normalizedUser.includes('import') && normalizedUser.includes('turtle') && 
               normalizedUser.includes('for') && normalizedUser.includes('right') && 
               normalizedUser.includes('144');
    }
    
    // Games exercises (41-45)
    if (exerciseId === 41) {
        // Number Guessing - accept input and if statement
        return normalizedUser.includes('input(') && normalizedUser.includes('if') && 
               normalizedUser.includes('print(');
    }
    
    if (exerciseId === 42) {
        // Rock Paper Scissors - accept random and input
        return normalizedUser.includes('import') && normalizedUser.includes('random') && 
               normalizedUser.includes('input(');
    }
    
    if (exerciseId === 43) {
        // Dice Roll - accept random.randint
        return normalizedUser.includes('import') && normalizedUser.includes('random') && 
               normalizedUser.includes('randint');
    }
    
    if (exerciseId === 44) {
        // Word Game - accept input and 'in' operator
        return normalizedUser.includes('input(') && normalizedUser.includes('in') && 
               normalizedUser.includes('print(');
    }
    
    if (exerciseId === 45) {
        // Math Quiz - accept f-string formatting
        return normalizedUser.includes('input(') && normalizedUser.includes('f"') && 
               normalizedUser.includes('if');
    }
    
    // Projects exercises (46-50)
    if (exerciseId === 46) {
        // Story Generator - accept random.choice
        return normalizedUser.includes('import') && normalizedUser.includes('random') && 
               normalizedUser.includes('choice');
    }
    
    if (exerciseId === 47) {
        // Calculator - accept multiple operations
        return normalizedUser.includes('+') && normalizedUser.includes('-') && 
               normalizedUser.includes('*') && normalizedUser.includes('/');
    }
    
    if (exerciseId === 48) {
        // Password Generator - accept string and random
        return normalizedUser.includes('import') && normalizedUser.includes('string') && 
               normalizedUser.includes('random');
    }
    
    if (exerciseId === 49) {
        // To-Do List - accept list and enumerate
        return normalizedUser.includes('[') && normalizedUser.includes('enumerate') && 
               normalizedUser.includes('for');
    }
    
    if (exerciseId === 50) {
        // Weather App - accept random and if-elif-else
        return normalizedUser.includes('import') && normalizedUser.includes('random') && 
               normalizedUser.includes('if') && normalizedUser.includes('elif');
    }
    
    // Default checking for any remaining exercises
    const solutionWords = normalizedSolution.split(/[=+\-*/()\[\]{}]/);
    const userWords = normalizedUser.split(/[=+\-*/()\[\]{}]/);
    
    let matches = 0;
    solutionWords.forEach(word => {
        if (word && userWords.includes(word)) {
            matches++;
        }
    });
    
    return matches >= solutionWords.length * 0.7; // 70% match threshold
}

// Helper function to get current exercise ID
function getCurrentExerciseId() {
    const modalTitle = document.querySelector('.exercise-modal-title');
    if (modalTitle) {
        const match = modalTitle.textContent.match(/Exercise (\d+):/);
        return match ? parseInt(match[1]) : null;
    }
    return null;
}

function evalPythonExpression(expr) {
    // Very basic Python expression evaluation
    expr = expr.replace(/"/g, '').replace(/'/g, '');
    
    if (expr.includes('+')) {
        const parts = expr.split('+');
        return parts.map(p => p.trim()).join('');
    }
    
    if (expr.includes('*')) {
        const parts = expr.split('*');
        if (parts.length === 2) {
            const a = parseInt(parts[0].trim());
            const b = parseInt(parts[1].trim());
            if (!isNaN(a) && !isNaN(b)) {
                return (a * b).toString();
            }
        }
    }
    
    return expr;
}

function updateProgress() {
    // Update progress bars for topics
    const topics = ['variables', 'numbers', 'strings', 'lists', 'loops', 'conditions', 'functions', 'turtle', 'games', 'projects'];
    
    topics.forEach(topic => {
        const topicExercises = exercises.filter(ex => ex.topic === topic);
        const completedTopicExercises = completedExercises.filter(id => 
            topicExercises.some(ex => ex.id === id)
        );
        const progress = (completedTopicExercises.length / topicExercises.length) * 100;
        
        const progressBar = document.getElementById(`progress-${topic}`);
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });
    
    // Update stats
    document.getElementById('total-stars').textContent = earnedStars;
    document.getElementById('exercises-completed').textContent = completedExercises.length;
    
    const topicsMastered = topics.filter(topic => {
        const topicExercises = exercises.filter(ex => ex.topic === topic);
        const completedTopicExercises = completedExercises.filter(id => 
            topicExercises.some(ex => ex.id === id)
        );
        return completedTopicExercises.length === topicExercises.length;
    }).length;
    
    document.getElementById('topics-mastered').textContent = topicsMastered;
    
    // Update certificate progress
    const certificateProgress = (completedExercises.length / exercises.length) * 100;
    document.getElementById('certificate-progress').style.width = `${certificateProgress}%`;
    document.querySelector('.certificate-text').textContent = `${completedExercises.length}/50 exercises completed`;
    
    // Update achievements
    updateAchievements();
}

function updateAchievements() {
    const achievementsContainer = document.getElementById('achievements-list');
    const achievements = [
        { id: 'first_exercise', icon: '🎯', title: 'First Steps', description: 'Complete your first exercise', unlocked: completedExercises.length >= 1 },
        { id: 'five_exercises', icon: '⭐', title: 'Getting Started', description: 'Complete 5 exercises', unlocked: completedExercises.length >= 5 },
        { id: 'ten_exercises', icon: '🏆', title: 'On Fire!', description: 'Complete 10 exercises', unlocked: completedExercises.length >= 10 },
        { id: 'twenty_exercises', icon: '🔥', title: 'Coding Master', description: 'Complete 20 exercises', unlocked: completedExercises.length >= 20 },
        { id: 'all_exercises', icon: '👑', title: 'Python Champion', description: 'Complete all 50 exercises!', unlocked: completedExercises.length >= 50 },
        { id: 'variables_master', icon: '📦', title: 'Variable Expert', description: 'Master all variable exercises', unlocked: exercises.filter(ex => ex.topic === 'variables').every(ex => completedExercises.includes(ex.id)) },
        { id: 'loops_master', icon: '🔄', title: 'Loop Master', description: 'Master all loop exercises', unlocked: exercises.filter(ex => ex.topic === 'loops').every(ex => completedExercises.includes(ex.id)) },
        { id: 'turtle_artist', icon: '🐢', title: 'Digital Artist', description: 'Complete all turtle exercises', unlocked: exercises.filter(ex => ex.topic === 'turtle').every(ex => completedExercises.includes(ex.id)) }
    ];
    
    achievementsContainer.innerHTML = '';
    
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = `achievement-card ${achievement.unlocked ? 'unlocked' : ''}`;
        
        achievementCard.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-description">${achievement.description}</div>
        `;
        
        achievementsContainer.appendChild(achievementCard);
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('exercise-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Add some fun animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.topic-card, .exercise-card, .feature-card')) {
            e.target.closest('.topic-card, .exercise-card, .feature-card').style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.closest('.topic-card, .exercise-card, .feature-card').style.transform = '';
            }, 150);
        }
    });
    
    // Add floating animation to mascot
    const mascot = document.querySelector('.python-mascot');
    if (mascot) {
        setInterval(() => {
            mascot.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
        }, 50);
    }
});
