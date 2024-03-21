export const usedGraphqlLazyQuery = async (fetchData, params, headers) => {

    const response = await fetchData({
        variables:
            {
                ...params
            },
        context: {
            headers: {
                ...headers
            }
        }
    })

    return response || []
}

export const usedGraphqlMutation = async (values,
                                          params,
                                          fieldName,
                                          headers,
                                          fetchQueries) => {

    const response = await values({
        variables:
            {
                ...params
            },
        context: {
            headers: {
                ...headers
            }
        },
        refetchQueries: fetchQueries,

        update(cache, {data}) {
            if (!data) return;

            fieldName?.map(item => (
                cache.evict(
                    {
                        fieldName: item,
                    }
                )
            ))

            cache.gc({
                resetResultCache: true,
                resetResultIdentities: true,
            })
        },
    })

    return response || []
}
export const usedMutationDelete = async (values, __typename,
                                         id, params, fieldNames,
                                         fetchQueries,
                                         headers) => {
    const response = await values({
        variables:
            {
                ...params
            },
        context: {
            headers: {
                ...headers
            }
        },
        refetchQueries: fetchQueries,

        update(cache, {data}) {
            if (!data) return;

            const pk = cache.identify({
                __typename: __typename,
                ...id,
            });

            cache.evict(
                {id: pk}
            );

            fieldNames?.map(item => (
                cache.evict(
                    {
                        fieldName: item,
                    }
                )
            ));
            cache.gc({
                resetResultCache: true,
                resetResultIdentities: true,
            })
        },
    })

    return response || []
}