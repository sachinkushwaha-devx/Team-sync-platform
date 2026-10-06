import { axiosInstance } from "../../../../config/Axiosinstance.jsx";

export let getAllEmployees = async ({
  page = 1,
  limit = 20,
  role = "",
  status = "active",
  department = "",
  search = "",
}) => {
  const res = await axiosInstance.get("/employee", {
    params: { page, limit, search, role, department, status },
  });
  return res.data?.data ?? res.data;
};

export let createEmployee = async (data) => {
  const res = await axiosInstance.post("/employee/create", data);
  return res.data?.data ?? res.data;
};

export let updateEmployee = async (empId, data) => {
  const res = await axiosInstance.patch(`/employee/update/${empId}`, data);
  return res.data?.data ?? res.data;
};

export let deleteEmployee = async (empId) => {
  const res = await axiosInstance.delete(`/employee/delete/${empId}`);
  return res.data?.data ?? res.data;
};
