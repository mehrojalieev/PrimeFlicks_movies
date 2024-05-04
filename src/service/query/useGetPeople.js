import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";


const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"


export const useGetPeople = (people_title) => {
    return useQuery({
        queryKey: ['people', people_title],
        queryFn:() => instance.get(`/${people_title && people_title}?api_key=${API_KEY}`)
        .then(res => res?.data)
    })
}