import express from 'express';
import 'express-async-error';

const lists = {
    lists : [
        {
            listIMG : "",
            listName : "Jordan1",
            listCreateTime : "2022-08-31",
            listMsg : [
                {
                    id : "0",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan1"
                },
                {
                    id : "1",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan1"
                },
                {
                    id : "2",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Nice to meet you!",
                    listName : "Jordan1"
                }
            ]
        },
        {
            listIMG : "",
            listName : "Jordan2",
            listCreateTime : "2022-08-30",
            listMsg : [
                {
                    id : "0",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan2"
                },
                {
                    id : "1",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan2"
                },
                {
                    id : "2",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "I like jordan1",
                    listName : "Jordan2"
                }
            ]
        },
        {
            listIMG : "",
            listName : "Jordan3",
            listCreateTime : "2022-08-29",
            listMsg : [
                {
                    id : "0",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan3"
                },
                {
                    id : "1",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan3"
                },
                {
                    id : "2",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "I want to buy it!",
                    listName : "Jordan3"
                }
            ]
        }
    ]
}

const router = express.Router();

router.get('/', (req, res, next) => {
    const data = lists;
    res.status(200).json(data);
})

router.post('/', (req, res, next) => {
    const {id, sender, sendTime, text, listName} = req.body;
    const msg = {id, sender, sendTime, text, listName}
    console.log(msg);
    lists.lists.forEach((list) =>{
        if(list.listName === msg.listName) {
            list.listMsg = [...list.listMsg, msg]
            console.log(list.listMsg)
        }
    })

    res.status(201).json(lists);
} )

export default router