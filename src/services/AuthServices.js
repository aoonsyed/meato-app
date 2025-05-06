import api from "./ApiCall";
import { login } from "../store/authSlice";

class AuthService{


    async login(data, dispatch) {
            const response = await api.post('accounts/login/', {
                email: data.email,
                password: data.password
            });
            if (dispatch){
                dispatch(login(response));
            }
            if (!response.ok) {
                throw new Error(response.msg)
            }
            return response;
    }


    async signup(data){
        const response = await api.post('accounts/register/', data);
        if (!response.ok) {
            console.error(response.msg)
            throw new Error("Signup failed.")
        }
        return response;
        
    }

}

const authService = new AuthService();
export default authService;