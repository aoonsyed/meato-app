class Api {

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";
    }

    async get(endpoint) {
        const url = this.baseUrl + endpoint;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        // if (!response.ok) {
        //     throw new Error(`${response.msg}`);
        // }
        const data = await response.json();
        return data;
    }

    async post(endpoint, body) {
        const url = this.baseUrl + endpoint;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
        const data = await response.json();
        return {
            ...data,
            ok: response.ok,
            status: response.status
        };
    }
}

const api = new Api();

export default api;