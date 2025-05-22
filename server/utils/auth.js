import jwt from "jsonwebtoken"
let secret = "this-is-super-secret"
export const createToken = (pss)=>{
       jwt.sign(tokenData, secret)
}

export const verify = (socket,next)=>{
     let token = socket.handshake.auth
     if(!token){
         throw new Error("Not Authorized")
     }
     let CurrentUser = User.findByPk(token.userId)
     socket.user = CurrentUser
     next()

}