// // Moking
// // Json Placeholder

// interface ITodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

// const getTodo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json();
// }

// const getTodoData = async (): Promise<void> => {
//     const result = await getTodo();
//     console.log(result);
// }

// getTodoData();

// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is Fetched';
//         if (data) {
//             resolve(data)
//         } else {
//             reject('Failed to Fetch Data!');
//         }
//     })
// }

// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }
// // Promise<string> Promise<boolean> Promise<object>