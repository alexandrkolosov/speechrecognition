const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = false; 

rec.onresult = function(e) {
    const acceptedColors = [
        'blue',
        'red',
        'black',
        'orange',
        'pink',
        'white',
    ];

    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();

        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('please selet color')
        }
    }
};

rec.start();