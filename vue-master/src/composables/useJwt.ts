import axios from "axios";

let token: string | null = null;

export async function getJwtToken(): Promise<string | null> {
    const payload = {
        email: import.meta.env.VITE_AUTH_EMAIL,
        password: import.meta.env.VITE_AUTH_PASSWORD,
    };
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth`,
            payload,
        );
        token = response.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return token;
    } catch {
        return "fehler mit der api";
    }
}
