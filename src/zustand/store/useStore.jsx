import { create } from "zustand";

export const useStore = create((set) => ({
    MoviesData: [],
    isLoading: false,
    isSuccess: false,

    setMoviesData: (movies) =>  set((state) =>  ({
        MoviesData: [...state.MoviesData, movies ], 
        isSuccess: true
    })),

    setRemoveMovie: (movie) => set((state) => ({
           MoviesData:  state.MoviesData.filter(f => f.id !== movie.id)
    }))
}))


const a = useStore.subscribe((state) => console.log(state.MoviesData))