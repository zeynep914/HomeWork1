import axios from "axios";

async function getData (user_id){
  try {
const { data: user } = await axios(
  `https://jsonplaceholder.typicode.com/users/${user_id}`
);

const { data: post } = await axios(
  `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
);

const data = Object.assign(user, post[0]);

return data;

} catch (e) {
   console.log(e);
    }
};

export default getData;