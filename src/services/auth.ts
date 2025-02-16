import instance from "@/libs/axios/axios";
import endpoint from "./endpoint.constant";
import { IRegister } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
};

export default authServices;
