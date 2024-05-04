import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

export const useRecommendMovies = (movie_link) => {
    return useQuery({
        queryKey: ['recommend', movie_link],
        queryFn: () => instance.get(`${movie_link}?api_key=${API_KEY}`)
        .then(res => res.data)
    })
}