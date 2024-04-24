import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

export const useGetAllMovies = (movie_api) => {
    return useQuery({
        queryKey: ['all'],
        queryFn: () => instance.get(`/${movie_api}?api_key=${API_KEY}`)
        .then(res => res.data.results)
    })
}