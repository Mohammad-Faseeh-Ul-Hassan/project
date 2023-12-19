import axios from "axios";
const url = "https://myproject-h7lj.onrender.com";

export const addRecipe = async (recipe) => {
    return await axios.post(`${url}/admin`, recipe);
}

export const updateRecipe = async (recipe) => {
    return await axios.put(`${url}/admin`, recipe);
}

export const getRecipe = async () => {
    return await axios.get(`${url}/admin`);
}

export const deleteRecipe = async (recipeId) => {
    return await axios.delete(`${url}/admin/${recipeId}`);
}


export const signUp = async (userData) => {
    return await axios.post(`${url}/signup`, userData);
}

export const login = async (loginData) => {
    return await axios.post(`${url}/login`, loginData);
}
