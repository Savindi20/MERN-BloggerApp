export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "a",
        name: "Savii Dadallage",
      },
      desc: "it was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2023-06-29T17:22:05.092+0000",
    },
    {
      _id: "11",
      user: {
        _id: "b",
        name: "Sewmi Sithara",
      },
      desc: "a reply for Oliver",
      post: "1",
      parent: "10",
      replyOnUser: "a",
      createdAt: "2023-06-30T17:22:05.092+0000",
    },
    {
      _id: "12",
      user: {
        _id: "b",
        name: "Savii Dadallage",
      },
      desc: "keep it up <3",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2023-06-30T17:22:05.092+0000",
    },
    {
      _id: "13",
      user: {
        _id: "c",
        name: "Sarani Thathsarani",
      },
      desc: "I'm always interested in your content :)",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-06-30T17:22:05.092+0000",
    },
  ];
};