import HttpClient from './http-client';
import User from '../dto/user';

class shiprocketAuthAPI extends HttpClient {
    public constructor() {
        super('https://apiv2.shiprocket.in/v1/external');
    }

    public login = (user: User) => this.instance.post<{ 'token': string }>('/auth/login', user);
}

export default new shiprocketAuthAPI;