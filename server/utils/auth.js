import jwt from "jsonwebtoken"

export const createToken = (pss)=>{
       jwt.sign("token", pss)
}

export const verify = (next,socket)=>{
     let token = socket.handshake.auth
     if(!token){
         throw new Error("Not Authorized")
     }
     next()

}