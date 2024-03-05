import {TTagType} from '../../../common/types';
import {gNewsApi} from '../../../services/api/rtkq';
import {IArticlesResponse} from '../types';

export const tagType: TTagType = 'News';

export const newsApi = gNewsApi.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<IArticlesResponse, number>({
      query: offset => ({
        url: `/users/products/whats_new?limit=10&offset=${offset}`,
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: () => [{type: tagType, id: 'LIST'}],
    }),
  }),
  overrideExisting: true,
});

export const {useGetNewsQuery} = newsApi;
