const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")

app.use(express.urlencoded({
	extended: false
}))
app.use(express.json())
app.use(cors())
app.get("/", function(req, res) {
	res.send("get ok")
});
app.post("/login",(req,res)=>{
	const USERNAME = "sam"
	const PASSWORD = "12345"
	
	const {username,password} = req.body.user
	
	if(username === USERNAME && password === PASSWORD){
		const user = {
			id:1,
			username:"sam",
			password:"12345",
		}
		const token = jwt.sign(user,"我是加密字串")
		
		res.json({
			message:"login OK",
			user,
			token
		})
	}else{
		res.status(403).json({
			message:"Login資料不正確"
		})
	}
	
})

app.listen(3010);
