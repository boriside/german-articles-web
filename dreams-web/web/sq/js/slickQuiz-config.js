// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<!--<p>text text text</p>-->",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Kind",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> das Kind </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Pfanne",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": true},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> die Pfanne  </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Pflaume",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": true},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> die Pflaume </p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "Boden",
            "a": [
                {"option": "der",      "correct": true},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> der Boden </p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "Affe",
            "a": [
                {"option": "der",      "correct": true},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> der Affe </p>" // no comma here
        },
        { // Question 6 - Multiple Choice, Single True Answer
            "q": "Papier",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> das Papier </p>" // no comma here
        },
        { // Question 7 - Multiple Choice, Single True Answer
            "q": "Babysitter",
            "a": [
                {"option": "der",      "correct": true},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> der Babysitter </p>" // no comma here
        },
        { // Question 8 - Multiple Choice, Single True Answer
            "q": "Software",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": true},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> die Software </p>" // no comma here
        },
        { // Question 9 - Multiple Choice, Single True Answer
            "q": "Gelenk",
            "a": [
                {"option": "der",      "correct": false},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> das Gelenk </p>" // no comma here
        },
        { // Question 10 - Multiple Choice, Single True Answer
            "q": "Käse",
            "a": [
                {"option": "der",      "correct": true},
                {"option": "die",     "correct": false},
                {"option": "das",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> der Käse </p>" // no comma here
        }

    ]
};
