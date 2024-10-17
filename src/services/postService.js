const URL = "post";

const get = async (url) => {
    const data = await fetch(`https://blogapi-mqr3.onrender.com/${url}`)
    const json = await data.json()
    return json;
}

const post = (url, body) => {

    fetch(`https://blogapi-mqr3.onrender.com/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

const findAll = async () => {
    const data = await get(URL);
    return data;
}

const create = (data) => {
    let body = {
        authorId: "joao",
        text: data.text
    }
    post(URL, body);
}

export default {
    findAll,
    create
}