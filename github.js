class Github {
    constructor() {
        this.client_id = '955ddd9dfd5d29fb6576';
        this.client_secret = '185e3ffd20f4153371ae654e6989beb9ba714d51';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
        
    }
}