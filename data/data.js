const lists = {
    lists : [
        {
            listIMG : "",
            listName : "Jordan1",
            listCreateTime : "2022-08-31",
            listMsg : [
                {
                    id : "2022-01-04 11:11:11",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan1",
                    userid : '1'
                },
                {
                    id : "2022-01-04 11:11:12",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan1",
                    userid : '2'
                },
                {
                    id : "2022-01-04 11:11:13",
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
                    id : "2022-01-04 11:11:14",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan2",
                    userid : '1'
                },
                {
                    id : "2022-01-04 11:11:15",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan2",
                    userid : '2'
                },
                {
                    id : "2022-01-04 11:11:16",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "I like jordan1",
                    listName : "Jordan2",
                    userid : '1'
                }
            ]
        },
        {
            listIMG : "",
            listName : "Jordan3",
            listCreateTime : "2022-08-29",
            listMsg : [
                {
                    id : "2022-01-04 11:11:17",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is Han",
                    listName : "Jordan3",
                    userid : '1'
                },
                {
                    id : "2022-01-04 11:11:18",
                    sender : "David",
                    sendTime : "2022-08-31 10:00:00",
                    text : "Hi my name is David",
                    listName : "Jordan3",
                    userid : '2'
                },
                {
                    id : "2022-01-04 11:11:19",
                    sender : "han",
                    sendTime : "2022-08-31 10:00:00",
                    text : "I want to buy it!",
                    listName : "Jordan3",
                    userid : '1'
                }
            ]
        }
    ]
}

export async function getAlldata() {
    return lists;
}

export async function createMsg(id, sender, sendTime, text, listName, userid) {
    // const user = 
    const msg = {id, sender, sendTime, text, listName, userid};

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
            list.listMsg = list.listMsg.filter((msg) => msg.id !== id)
        }
    })
}