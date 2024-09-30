import { baseApi } from "../api/baseApi";

const createProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (productData) => ({
                url: '/products/create-product',
                method: 'POST',
                body: productData,
            }),
        }),
    }),
});

export const { useCreateProductMutation } = createProductsApi;