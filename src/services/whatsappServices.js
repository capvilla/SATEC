//const fs = require("fs");
//const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

function sendMessageWhatsApp(data) {
    // console.log(`Data recibida ${data}`)
    // console.log('Separacion')


    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/163224320217018/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAPdsi4zRZAoBOwgJJGCZAfVZBZCAFjzXfVJBjfkNFLvy7SZBKgjHhbKe1U2GLbZBQ7GXPwzBtwTOfk0ZCPbUOnVl6dGyVmmEZBVaTMK6mRXJsIL8o5TgzvDw6Rf69g8UaUtF5TuNpggrT2DmL4gunR9BgDBz4emFHof75CNTj8Qo5NYr5rgCkEbOYQDTM6xo9BD"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    sendMessageWhatsApp
};
