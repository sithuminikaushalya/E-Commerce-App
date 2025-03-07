import dotnev from 'dotenv';

dotnev.config({path:'.env'})

export const PORT = process.env.PORT

export const JWT_SECRET = process.env.JWT_SECRET!