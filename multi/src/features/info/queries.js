const GET_PUBLIC_USERS = ` 
    query getUsers {
        users {
            name
        }
    }`;

module.exports = { GET_PUBLIC_USERS };