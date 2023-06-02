export const getAuthor = (id: string) => fetch('http://localhost:8081/author/' + id).then((json) => json.json())
export const getAuthors = () => fetch('http://localhost:8081/authors').then((json) => json.json())
