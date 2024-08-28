import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create(
    persist(
        (set) => ({
            MoviesData: [],
            isLoading: false,
            isSuccess: false,

            setMoviesData: (movies) => set((state) => ({
                MoviesData: [...state.MoviesData, movies],
                isSuccess: true
            })),

            setRemoveMovie: (movie) => set((state) => ({
                MoviesData: state.MoviesData.filter(f => f.id !== movie.id)
            }
            ))

        }),
        {
            name: 'movies',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

