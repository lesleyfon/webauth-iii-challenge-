module.exports = function(){
    return(req, res, next) =>{
        if(!req.session || !req.session.user){
            res.status(401).json({
                message: 'You are Unauthorized'
            })
        }else{
            next()
        }
    }
}