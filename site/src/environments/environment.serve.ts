export const environment = {
    production: true,
    environment: 'serve',
    getPath: (username: string, password: string, refresh: boolean) => `assets/data/example.json?username=${username}&password=${password}&refresh=${refresh}`
};
