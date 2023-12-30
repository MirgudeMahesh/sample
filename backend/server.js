const express=require('express')
const path=require('path')
const app=express();
const hbs=require("hbs")
//running static website
// console.log(path.join(__dirname,"frontend"));
// const loc=path.join(__dirname,"frontend")

// app.use(express.static(loc));

//changing template engine name from views to run dynamic website
const partialpath=path.join(__dirname,".")
console.log(partialpath);
hbs.registerPartials(partialpath);
const loca=path.join(__dirname,"template/views")
console.log(loca);
app.set('view engine','hbs')
app.set("views",loca);

app.get("/",(req,res)=>{
    res.render("index",{
        
        name:'Mahesh',
    });
})

app.get("/",(req,res)=>{
    res.send("hi");
}
)
app.get("/about",(req,res)=>{
//reqeustquery
    const city=req.query.city;
    const area=req.query.area;
    const population=req.query.population;
    console.log(req.query)
 
    res.render("biodata",{
        city:city,
        area:area,
        population:population
    });
}
)
app.get("/hello/:me",(req,res)=>{
//requestparams
    const x=req.params.me;
    res.send(x);
})
//if other than valid requests enters
app.get('/about/*',(req,res)=>{
    res.render("404",{
        name:"about ke andar kuch nahi hai",
    })

})
app.get('*',(req,res)=>{
    res.render("404",{
        name:"galat url yaha kuch nahi hai",
    })

})


app.listen(8000,()=>{
    console.log("port is running");
});