let endpointBase = ""

if (process.env.NODE_ENV !== "production") {
    endpointBase= "http://localhost:3001"
}
export const url = endpointBase;