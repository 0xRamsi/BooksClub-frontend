export const getBook = (id: string) => fetch('http://localhost:8081/book/' + id).then((json) => json.json())
export const getBooks = () => fetch('http://localhost:8081/books').then((json) => json.json())
