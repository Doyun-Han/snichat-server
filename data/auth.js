let users = [
    {
        id : '1',
        username : 'han',
        email : 'doyun@abcd.com',
        password : '$2b$08$mAk3XvUGTnTqbPfUWsDtkuwnBg6taL.Jld.HjgVjzWXzMbkk1Kyn6'
    }
]

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function findByEmail(email) {
    return users.find((user) => user.email === email);
}
export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}
export async function createUser(user) {
    const created = { ...user, id: Date.now().toString()}
    users.push(created);
    return created.id
}