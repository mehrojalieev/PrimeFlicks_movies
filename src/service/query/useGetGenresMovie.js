import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

export const useGetGenreMovie = (genre_id) =>{
    return useQuery ({
        queryKey: ['genre', genre_id],
        queryFn: () => instance.get(`/discover/movie?api_key=${API_KEY}&with_genres=${genre_id && genre_id}`)
        .then(res => res.data)
    })
}
