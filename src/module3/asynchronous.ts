// Moking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is Fetched';
        if (data) {
            resolve(data)
        } else {
            reject('Failed to Fetch Data!');
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}
// Promise<string> Promise<boolean> Promise<object>