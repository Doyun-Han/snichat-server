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
                    listName : "Jordan1",
                    userid : '1'
                },
                {
                    id : "1",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan1",
                    userid : '1'
                },
                {
                    id : "2",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Nice to meet you!",
                    listName : "Jordan1",
                    userid : '1'
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

export async function getAlldata() {
    return lists;
}

export async function createMsg(id, sender, sendTime, text, listName) {
    const msg = {id, sender, sendTime, text, listName};

    lists.lists.forEach((list) =>{
        if(list.listName === msg.listName) {
            list.listMsg = [...list.listMsg, msg]
        }
    })
    return lists;
}

export async function removeMsg(id, targetListName) {
    lists.lists.forEach((list) => {
        if(list.listName === targetListName) {
            list.listMsg.splice(id,1);
        }
    })
}