
window.onload = function() {
    const greetings = ["Hello","How are you today?", "Hi","Good morning"];

    var greeting = greetings[Math.floor(Math.random() * greetings.length)];
    var greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
};

    