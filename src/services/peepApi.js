import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const peepApi = createApi({
  reducerPath: 'peepsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Peep'],
  endpoints: (builder) => ({
    peeps: builder.query({
      query: () => '/posts',
      providesTags: ['Peep']
    }),
    addPeep: builder.mutation({
      query: (peep) => ({
        url: '/posts',
        method: 'POST',
        body: peep
      }),
      invalidatesTags: ['Peep']
    }),
  })
}) 

export const {
  usePeepsQuery,
  useAddPeepMutation,
} = peepApi;