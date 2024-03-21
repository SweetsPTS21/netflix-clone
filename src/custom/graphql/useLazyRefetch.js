import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {client} from "./index";

export default function useLazyRefetch(query, options) {
    const [fetchNeeded, setFetchNeeded] = useState(false);
    const [loadData, {refetch}] = useLazyQuery(query, options);

    useEffect(() => {
        if (fetchNeeded) {
            setFetchNeeded(false);
            refetch().then(() => {
            });
        }
    }, [fetchNeeded]);

    const fetchIfNeeded = async (variables, useCache) => {
        try {
            if (useCache) {
                const cachecData = client.cache.readQuery({
                    query: query,
                    variables: variables
                });
                if (!cachecData) return;
            }
            setFetchNeeded(true);
            return await loadData({variables: variables})

        } catch {
        }
    };

    return {
        fetchIfNeeded: fetchIfNeeded
    };
}