import axios from "axios";

const getData = async (userId = 1) => {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const { data: postUser } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

    console.log(user);
    console.log(postUser);
};

export default getData;