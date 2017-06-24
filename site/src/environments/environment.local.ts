export const environment = {
    production: true,
    environment: 'local',
    getPath: (username: string, password: string, refresh: boolean) => `data/get?username=${username}&password=${password}&refresh=${refresh}`
};
