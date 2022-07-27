export const BASE_URL = 
    process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_PATH_PROD
    : process.env.NEXT_PUBLIC_API_PATH_DEV