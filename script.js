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
    checkMobileStatus();
    initializeApp();
    initializeMobileCompatibility();
    loadExercises();
    updateProgress();
    
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

function initializeMobileCompatibility() {
    // Add mobile-specific event listeners
    if (isMobileDevice()) {
        console.log('Mobile device detected, initializing mobile compatibility');
        
        // Prevent zoom on input focus (iOS)
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                if (window.innerWidth < 768) {
                    document.querySelector('meta[name="viewport"]').setAttribute('content', 
                        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                }
            });
            
            input.addEventListener('blur', function() {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 
                    'width=device-width, initial-scale=1.0');
            });
        });
        
        // Add touch-friendly classes
        document.body.classList.add('mobile-device');
        
        // Improve touch interactions
        const touchElements = document.querySelectorAll('.exercise-card, .topic-card, .nav-btn, .cta-button');
        touchElements.forEach(element => {
            element.style.touchAction = 'manipulation';
        });
    }
}

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
    
    // Store the current exercise ID globally for easier access
    window.currentExerciseId = exercise.id;
    
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
    const codeInput = document.getElementById('exercise-code');

    // Mobile-friendly code input handling
    let code = '';
    if (codeInput) {
        code = codeInput.value;
    } else {
        // Fallback for mobile browsers
        const textarea = document.querySelector('#exercise-code');
        if (textarea) {
            code = textarea.value;
        }
    }

    const outputDiv = document.getElementById(`output-content-${exerciseId}`);

    try {
        // Normalize common mobile quirks (smart quotes, newlines, zero-width, NBSP)
        code = code
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n')
            .replace(/[\u200B-\u200D\uFEFF]/g, '')
            .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ')
            .replace(/[“”]/g, '"')
            .replace(/[‘’]/g, "'");
        // Simple Python-like execution simulation
        let output = '';

        // Build a tiny environment of simple string assignments for use by len(variable)
        // Supports patterns like: name = "Alice" (single-line, string literal only)
        const env = {};
        try {
            const assignRegex = /(\b[A-Za-z_][A-Za-z0-9_]*\b)\s*=\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
            let m;
            while ((m = assignRegex.exec(code)) !== null) {
                const varName = m[1];
                // Strip the surrounding quotes safely
                const raw = m[2];
                const strMatch = raw.match(/^"([\s\S]*)"$|^'([\s\S]*)'$/);
                const value = strMatch ? (strMatch[1] !== undefined ? strMatch[1] : strMatch[2]) : '';
                env[varName] = value;
            }
        } catch (_) { /* ignore env build errors */ }

        // Basic code interpretation
        if (code.includes('print(')) {
            const contents = [];
            const src = code;
            for (let i = 0; i < src.length; i++) {
                if (src.startsWith('print(', i)) {
                    let j = i + 'print('.length;
                    let depth = 1; // we are after the first '('
                    let buf = '';
                    while (j < src.length && depth > 0) {
                        const ch = src[j];
                        if (ch === '(') { depth++; buf += ch; }
                        else if (ch === ')') { depth--; if (depth > 0) buf += ch; }
                        else { buf += ch; }
                        j++;
                    }
                    contents.push(buf.trim());
                    i = j - 1; // jump ahead
                }
            }
            contents.forEach(arg => {
                output += evalPythonExpression(arg, env) + '\n';
            });
        }

        outputDiv.innerHTML = `<pre>${output || 'No output'}</pre>`;
    } catch (error) {
        outputDiv.innerHTML = `<pre style="color: red;">Error: ${error.message}</pre>`;
    }
}

// Check the user's answer for a given exercise
function checkSolution(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    // Mobile-friendly code input handling
    let userCode = '';
    const codeInput = document.getElementById('exercise-code') ||
                      document.querySelector('textarea#exercise-code') ||
                      document.querySelector('.code-input');
    if (codeInput) {
        userCode = (codeInput.value || '').trim();
    }
    if (!userCode) {
        const textarea = document.querySelector('#exercise-code');
        if (textarea && textarea.value) {
            userCode = textarea.value.trim();
        }
    }

    const feedbackDiv = document.getElementById(`feedback-${exerciseId}`);
    const isMobile = isMobileDevice();

    if (!userCode) {
        feedbackDiv.innerHTML = '<div class="feedback incorrect">⚠️ Please write some code first!</div>';
        return;
    }

    const isCorrect = checkCodeCorrectness(userCode, exercise.solution);

    if (isCorrect) {
        feedbackDiv.innerHTML = '<div class="feedback correct">🎉 Great job! Your code is correct!</div>';
        // For Exercise 13, auto-run code to display the expected output (6)
        if (exerciseId === 13) {
            try { runCode(exerciseId); } catch(e) { /* ignore */ }
        }
        if (!completedExercises.includes(exerciseId)) {
            completedExercises.push(exerciseId);
            earnedStars += 3;
            localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
            localStorage.setItem('earnedStars', earnedStars.toString());
            updateProgress();
            loadExercises();
            if (isMobile) {
                setTimeout(() => {
                    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    } else {
        feedbackDiv.innerHTML = '<div class="feedback incorrect">❌ Not quite right. Try again! 💡 Click "Get Hint" for help!</div>';
        if (isMobile) {
            setTimeout(() => {
                feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
}

function showHint(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const feedbackDiv = document.getElementById(`feedback-${exerciseId}`);
    feedbackDiv.innerHTML = `<div class="feedback hint">💡 Hint: ${exercise.hint}</div>`;
}

// Mobile compatibility helper functions
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
}

// Enhanced mobile check - logs mobile status for debugging
function checkMobileStatus() {
    const isMobile = isMobileDevice();
    if (isMobile) {
        console.log('🌐 Mobile device detected:', {
            width: window.innerWidth,
            userAgent: navigator.userAgent,
            hasTouch: 'ontouchstart' in window,
            orientation: screen.orientation ? screen.orientation.angle : 'unknown'
        });
    }
    return isMobile;
}

function getMobileFriendlyElement(selector) {
    // Try multiple methods to get elements on mobile
    let element = document.getElementById(selector.replace('#', ''));
    if (!element) {
        element = document.querySelector(selector);
    }
    if (!element) {
        element = document.querySelectorAll(selector)[0];
    }
    return element;
}

function getMobileFriendlyValue(elementId) {
    const element = getMobileFriendlyElement(elementId);
    if (element) {
        return element.value || element.textContent || element.innerText || '';
    }
    return '';
}

// Helper function for flexible pattern checking
function flexiblePatternCheck(userCode, solution) {
    const normalizedUser = userCode.toLowerCase().replace(/\s+/g, ' ').trim();
    const normalizedSolution = solution.toLowerCase().replace(/\s+/g, ' ').trim();
    
    // Extract key concepts from both codes
    const userHasVar = /\w+\s*=\s*/.test(userCode);
    const userHasString = /"[^"]*"|'[^']*'/.test(userCode);
    const userHasNumber = /\d+/.test(userCode);
    const userHasList = /\[.*\]/.test(userCode);
    const userHasLoop = /for|while/.test(userCode);
    const userHasIf = userCode.includes('if');
    const userHasDef = userCode.includes('def');
    const userHasImport = userCode.includes('import');
    const userHasPrint = userCode.includes('print');
    
    const solutionHasVar = /\w+\s*=\s*/.test(solution);
    const solutionHasString = /"[^"]*"|'[^']*'/.test(solution);
    const solutionHasNumber = /\d+/.test(solution);
    const solutionHasList = /\[.*\]/.test(solution);
    const solutionHasLoop = /for|while/.test(solution);
    const solutionHasIf = solution.includes('if');
    const solutionHasDef = solution.includes('def');
    const solutionHasImport = solution.includes('import');
    const solutionHasPrint = solution.includes('print');
    
    // Check if key concepts match
    let matches = 0;
    let total = 0;
    
    if (solutionHasVar) { total++; if (userHasVar) matches++; }
    if (solutionHasString) { total++; if (userHasString) matches++; }
    if (solutionHasNumber) { total++; if (userHasNumber) matches++; }
    if (solutionHasList) { total++; if (userHasList) matches++; }
    if (solutionHasLoop) { total++; if (userHasLoop) matches++; }
    if (solutionHasIf) { total++; if (userHasIf) matches++; }
    if (solutionHasDef) { total++; if (userHasDef) matches++; }
    if (solutionHasImport) { total++; if (userHasImport) matches++; }
    if (solutionHasPrint) { total++; if (userHasPrint) matches++; }
    
    // At least 70% of key concepts should match
    return matches >= total * 0.7;
}

// Test function to validate mobile input handling
function testMobileInput(input, expectedPattern) {
    console.log('Testing input:', input);
    console.log('Pattern:', expectedPattern);
    const result = expectedPattern.test(input);
    console.log('Result:', result);
    return result;
}

// Enhanced exercise checking with mobile compatibility
function checkCodeCorrectness(userCode, solution) {
    if (!userCode || typeof userCode !== 'string') {
        console.error('Invalid user code provided:', userCode);
        return false;
    }
    
    // Store original for debugging
    const originalCode = userCode;
    
    // STEP 1: Clean up mobile keyboard quirks and invisible characters
    let cleanedCode = userCode
        // Normalize all line break types
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        // Remove invisible/zero-width characters that mobile keyboards might add
        .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, '')
        // Replace non-breaking spaces and other weird spaces with regular spaces
        .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ');
    
    // STEP 2: Normalize whitespace patterns for single-line matching
    // Collapse multiple spaces into one, handle tabs
    cleanedCode = cleanedCode.replace(/[ \t]+/g, ' ');
    
    // Collapse newlines into spaces (for pattern matching)
    cleanedCode = cleanedCode.replace(/\n+/g, ' ');
    
    // Remove any remaining excess whitespace
    cleanedCode = cleanedCode.replace(/\s+/g, ' ').trim();
    
    // STEP 3: Make case-insensitive for comparison
    const normalizedUser = cleanedCode.toLowerCase();
    const normalizedSolution = (solution || '').toLowerCase().replace(/\s+/g, ' ').trim();
    
    // Get exercise ID with mobile fallbacks
    const exerciseId = getCurrentExerciseId();
    
    console.log('='.repeat(50));
    console.log('MOBILE DEBUG - Exercise Check');
    console.log('Exercise ID:', exerciseId);
    console.log('Original:', originalCode);
    console.log('Normalized:', normalizedUser);
    console.log('Expected:', normalizedSolution);
    console.log('Code Length:', originalCode.length, '->', normalizedUser.length);
    console.log('Has newlines:', originalCode.includes('\n'));
    console.log('Mobile Device:', isMobileDevice());
    console.log('='.repeat(50));
    
    if (!exerciseId) {
        console.log('No exercise ID, using fallback pattern matching');
        return flexiblePatternCheck(normalizedUser, normalizedSolution);
    }
    
    // Use normalized code for pattern matching
    userCode = normalizedUser;
    
    // Variables exercises (1-5) - Super flexible concept-based checking
    if (exerciseId === 1) {
        // My First Variable - just need an equals sign and quotation marks
        const result = userCode.includes('=') && (userCode.includes('"') || userCode.includes("'"));
        console.log('✅ Exercise 1:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 2) {
        // Age Variable - just need an equals sign and a digit
        const result = userCode.includes('=') && userCode.match(/\d/);
        console.log('✅ Exercise 2:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 3) {
        // Favorite Color - just need an equals sign and quotation marks  
        const result = userCode.includes('=') && (userCode.includes('"') || userCode.includes("'"));
        console.log('✅ Exercise 3:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 4) {
        // Change Variables - just need multiple assignments
        const assignmentCount = (userCode.match(/=/g) || []).length;
        const result = assignmentCount >= 2;
        console.log('✅ Exercise 4:', { input: userCode, assignmentCount, result });
        return result;
    }
    
    if (exerciseId === 5) {
        // Multiple Variables - just need three assignments
        const assignmentCount = (userCode.match(/=/g) || []).length;
        const result = assignmentCount >= 3;
        console.log('✅ Exercise 5:', { input: userCode, assignmentCount, result });
        return result;
    }
    
    // Numbers exercises (6-10) - Simple concept checking
    if (exerciseId === 6) {
        // Just need a + with numbers
        const result = userCode.includes('+') && /\d/.test(userCode);
        console.log('✅ Exercise 6:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 7) {
        const result = userCode.includes('-') && /\d/.test(userCode);
        console.log('✅ Exercise 7:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 8) {
        const result = userCode.includes('*') && /\d/.test(userCode);
        console.log('✅ Exercise 8:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 9) {
        const result = userCode.includes('/') && /\d/.test(userCode);
        console.log('✅ Exercise 9:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 10) {
        // Just need =, numbers, and + or -
        const result = userCode.includes('=') && /\d/.test(userCode) && (userCode.includes('+') || userCode.includes('-'));
        console.log('✅ Exercise 10:', { input: userCode, result });
        return result;
    }
    
    // Strings exercises (11-15)
    if (exerciseId === 11) {
        // Just need quotes
        const result = userCode.includes('"') || userCode.includes("'");
        console.log('✅ Exercise 11:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 12) {
        // Just need + with quotes
        const result = (userCode.includes('"') || userCode.includes("'")) && userCode.includes('+');
        console.log('✅ Exercise 12:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 13) {
        // Require: word = "Python" and print(len(word)) (case-insensitive; spacing/newlines normalized)
        const hasWordAssign = /\bword\s*=\s*(["'])python\1/.test(userCode);
        const hasPrintLen = /print\s*\(\s*len\s*\(\s*word\s*\)\s*\)/.test(userCode);
        const result = hasWordAssign && hasPrintLen;
        console.log('✅ Exercise 13 (strict):', { input: userCode, hasWordAssign, hasPrintLen, result });
        return result;
    }
    
    if (exerciseId === 14) {
        // Just need upper
        const result = userCode.includes('upper');
        console.log('✅ Exercise 14:', { input: userCode, result });
        return result;
    }
    
    if (exerciseId === 15) {
        // Just need =, quotes, and print
        const result = userCode.includes('=') && (userCode.includes('"') || userCode.includes("'")) && userCode.includes('print');
        console.log('✅ Exercise 15:', { input: userCode, result });
        return result;
    }
    
    // Lists exercises (16-20)
    if (exerciseId === 16) {
        const result = userCode.includes('[');
        console.log('✅ Exercise 16:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 17) {
        const result = userCode.includes('[') && userCode.includes(']');
        console.log('✅ Exercise 17:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 18) {
        const result = userCode.includes('append');
        console.log('✅ Exercise 18:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 19) {
        const result = userCode.includes('len');
        console.log('✅ Exercise 19:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 20) {
        const result = userCode.includes('[') && userCode.includes(':');
        console.log('✅ Exercise 20:', { input: userCode, result });
        return result;
    }
    
    // Loops exercises (21-25)
    if (exerciseId === 21) {
        const result = userCode.includes('for') && userCode.includes('range');
        console.log('✅ Exercise 21:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 22) {
        const result = userCode.includes('for') && userCode.includes('in');
        console.log('✅ Exercise 22:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 23) {
        const result = userCode.includes('while');
        console.log('✅ Exercise 23:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 24) {
        const result = userCode.includes('range') && /,/.test(userCode);
        console.log('✅ Exercise 24:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 25) {
        const result = (userCode.match(/for/g) || []).length >= 2;
        console.log('✅ Exercise 25:', { input: userCode, result });
        return result;
    }
    
    // Conditions exercises (26-30)
    if (exerciseId === 26) {
        const result = userCode.includes('if') && userCode.includes('>');
        console.log('✅ Exercise 26:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 27) {
        const result = userCode.includes('if') && userCode.includes('else');
        console.log('✅ Exercise 27:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 28) {
        const result = userCode.includes('elif');
        console.log('✅ Exercise 28:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 29) {
        const result = userCode.includes('if') && userCode.includes('and');
        console.log('✅ Exercise 29:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 30) {
        const result = userCode.includes('if') && userCode.includes('>=');
        console.log('✅ Exercise 30:', { input: userCode, result });
        return result;
    }
    
    // Functions exercises (31-35)
    if (exerciseId === 31) {
        const result = userCode.includes('def');
        console.log('✅ Exercise 31:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 32) {
        const result = userCode.includes('def') && /\(/.test(userCode);
        console.log('✅ Exercise 32:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 33) {
        const result = userCode.includes('def') && userCode.includes('return');
        console.log('✅ Exercise 33:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 34) {
        const result = userCode.includes('=') && /def/.test(userCode);
        console.log('✅ Exercise 34:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 35) {
        const result = userCode.includes('def') && /=/.test(userCode);
        console.log('✅ Exercise 35:', { input: userCode, result });
        return result;
    }
    
    // Turtle exercises (36-40)
    if (exerciseId === 36) {
        const result = userCode.includes('turtle') && userCode.includes('forward') && userCode.includes('right');
        console.log('✅ Exercise 36:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 37) {
        const result = userCode.includes('turtle') && userCode.includes('circle');
        console.log('✅ Exercise 37:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 38) {
        const result = userCode.includes('turtle') && userCode.includes('color');
        console.log('✅ Exercise 38:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 39) {
        const result = userCode.includes('turtle') && userCode.includes('forward') && userCode.includes('left');
        console.log('✅ Exercise 39:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 40) {
        const result = userCode.includes('turtle') && userCode.includes('forward');
        console.log('✅ Exercise 40:', { input: userCode, result });
        return result;
    }
    
    // Games exercises (41-45)
    if (exerciseId === 41) {
        const result = userCode.includes('input') && userCode.includes('if');
        console.log('✅ Exercise 41:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 42) {
        const result = userCode.includes('random') && userCode.includes('choice');
        console.log('✅ Exercise 42:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 43) {
        const result = userCode.includes('random') && userCode.includes('randint');
        console.log('✅ Exercise 43:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 44) {
        // Use word-boundary regex for 'in' to better handle mobile spacing/normalization
        const result = userCode.includes('input') && /\bin\b/.test(userCode);
        console.log('✅ Exercise 44:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 45) {
        const result = userCode.includes('input') && /\d/.test(userCode) && userCode.includes('if');
        console.log('✅ Exercise 45:', { input: userCode, result });
        return result;
    }
    
    // Projects exercises (46-50)
    if (exerciseId === 46) {
        const result = userCode.includes('random') && userCode.includes('choice');
        console.log('✅ Exercise 46:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 47) {
        const result = userCode.includes('print') && (userCode.includes('f"') || userCode.includes("f'") || userCode.includes('format'));
        console.log('✅ Exercise 47:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 48) {
        const result = userCode.includes('random') && userCode.includes('string');
        console.log('✅ Exercise 48:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 49) {
        const result = userCode.includes('enumerate');
        console.log('✅ Exercise 49:', { input: userCode, result });
        return result;
    }
    if (exerciseId === 50) {
        const result = userCode.includes('random') && userCode.includes('randint') && userCode.includes('if');
        console.log('✅ Exercise 50:', { input: userCode, result });
        return result;
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
    
    const isCorrect = matches >= solutionWords.length * 0.7;
    console.log('Mobile Debug - Default check:', { matches, required: solutionWords.length * 0.7, isCorrect });
    return isCorrect;
}

// Helper function to get current exercise ID
function getCurrentExerciseId() {
    // First try the global variable (most reliable)
    if (window.currentExerciseId) {
        return window.currentExerciseId;
    }
    
    // Fallback: try to get from modal title
    const modalTitle = document.querySelector('.exercise-modal-title');
    if (modalTitle) {
        const match = modalTitle.textContent.match(/Exercise (\d+):/);
        if (match) {
            return parseInt(match[1]);
        }
    }
    
    // Fallback: try to get from the modal content
    const modalContent = document.getElementById('modal-content');
    if (modalContent) {
        const titleElement = modalContent.querySelector('.exercise-modal-title');
        if (titleElement) {
            const match = titleElement.textContent.match(/Exercise (\d+):/);
            if (match) {
                return parseInt(match[1]);
            }
        }
    }
    
    // Another fallback: check if we can get it from the button that opened the modal
    const exerciseButtons = document.querySelectorAll('.exercise-card');
    for (let button of exerciseButtons) {
        if (button.classList.contains('active') || button.style.backgroundColor) {
            const numberElement = button.querySelector('.exercise-number');
            if (numberElement) {
                return parseInt(numberElement.textContent);
            }
        }
    }
    
    console.log('Could not determine exercise ID');
    return null;
}

function evalPythonExpression(expr, env = {}) {
    // Very basic Python expression evaluation
    const original = expr;
    const trimmed = (expr || '').trim();

    // Handle len(...) for string literals and simple variables
    const lenMatch = trimmed.match(/^len\s*\(\s*([^)]+)\s*\)\s*$/i);
    if (lenMatch) {
        const inner = lenMatch[1].trim();
        // If it's a quoted string literal
        const literal = inner.match(/^"([\s\S]*)"$|^'([\s\S]*)'$/);
        if (literal) {
            const content = literal[1] !== undefined ? literal[1] : literal[2];
            return String(content.length);
        }
        // If it's a simple variable name referencing a string in env
        const varNameMatch = inner.match(/^[A-Za-z_][A-Za-z0-9_]*$/);
        if (varNameMatch) {
            const name = varNameMatch[0];
            if (typeof env[name] === 'string') {
                return String(env[name].length);
            }
        }
        // Fallback: unknown, just return as-is
        return original;
    }

    // String concatenation like "Hello" + "World" (remove quotes and join)
    if (trimmed.includes('+')) {
        const parts = trimmed.split('+');
        return parts.map(p => p.replace(/^[\s]*["']|["'][\s]*$/g, '').trim()).join('');
    }

    // Simple integer multiplication like 2 * 3
    if (trimmed.includes('*')) {
        const parts = trimmed.split('*');
        if (parts.length === 2) {
            const a = parseInt(parts[0].trim());
            const b = parseInt(parts[1].trim());
            if (!isNaN(a) && !isNaN(b)) {
                return (a * b).toString();
            }
        }
    }

    // Default: return the original expression
    return original;
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

// Note: Animations are now initialized in the main DOMContentLoaded listener above