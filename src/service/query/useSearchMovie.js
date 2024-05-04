import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";


const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

export const useSearchMovie = (movie_name) => {
    return useQuery({
        queryKey: ['search', movie_name],
        queryFn:() => instance.get(`/search/movie?api_key=${API_KEY}&query=${movie_name}`)
        .then(res => res?.data.results)
    })
}