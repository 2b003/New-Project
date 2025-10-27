const app = express();
const port = 3000 ; 

let jobs = [
{id : 1 ,title: "Software Engineer",company:"TechCorp", location: "Develop innovative software solutions ."},
{id : 2 , title: "Data Analyst", company: "DataInc", location:"South Africa", description:"Analyze data to drive business insights."}
];
app.use(json());
app.use(statistics ('public'));

app.get('/api/jobs',(req,res) =>{
res.json(jobs);
});

app.listen(port,()=>{
console.log(`server running at http://localhost:${port}`);


});
