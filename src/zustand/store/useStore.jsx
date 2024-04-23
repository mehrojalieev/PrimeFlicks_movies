import { create } from "zustand";

export const useStore = create((set) => ({
    MoviesData: [],
    isLoading: false,
    isSuccess: false,
    setMoviesData: (movies) =>  set((state) => console.log(movies) ({MoviesData: [...state.MoviesData, movies ], isSuccess: true
    }))
}))