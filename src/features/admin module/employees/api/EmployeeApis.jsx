import { axiosInstance } from "../../../../config/Axiosinstance.jsx";

export const getAllEmployees = async ({
    page = 1,
    limit = 20,
    role = "",
    status = "active",
    department = "",
    search = "",
} = {}) => {
    const response = await axiosInstance.get("/employee", {
        params: { page, limit, role, status, department, search },
    });
    return response.data?.data ?? response.data;
};