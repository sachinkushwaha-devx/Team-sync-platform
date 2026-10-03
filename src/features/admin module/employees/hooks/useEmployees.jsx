import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../api/EmployeeApis.jsx";

export const useEmployee = () => {
    return useQuery({
        queryKey: ["employees"],
        queryFn: getAllEmployees,
        staleTime: 100000,
    });
};