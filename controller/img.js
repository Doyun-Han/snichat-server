import fs from 'fs';

export async function getImg(req, res) {
    const roomName = req.params.roomname
    console.log(roomName);
    fs.readFile(`./img/${roomName}.jpg`, (err, data) => {
        console.log(err);
        res.writeHead(200, {"Context-Type" : "image/jpg"});
        res.write(data)
        res.end()
    })
}