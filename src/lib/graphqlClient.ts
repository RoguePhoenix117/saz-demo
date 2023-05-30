import { Client, cacheExchange, fetchExchange } from "urql";



export const client = new Client({
    url: "https://spacex-production.up.railway.app/",
    exchanges: [cacheExchange, fetchExchange],
});