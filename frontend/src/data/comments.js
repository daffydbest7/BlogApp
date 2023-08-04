export const getCommentsData = async () => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "David Lawrence",
            },
            desc:"Coding made fun ",
            post:"1",
            parent:null,
            replyOnUser: null,
            createdAt: "2023-07-07",
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "David Lawrence",
            },
            desc:"Coding made fun ",
            post:"16",
            parent:"10",
            replyOnUser: "a",
            createdAt: "2023-07-07",
        },
        {
            _id: "12",
            user: {
                _id: "c",
                name: "Victor Abali",
            },
            desc:"The act of crypto",
            post:"12",
            parent:null,
            replyOnUser: null,
            createdAt: "2023-07-07",
        },
    ]
}