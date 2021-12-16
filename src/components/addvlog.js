import {Formik } from "formik"
import { Button, Card, CardContent} from '@mui/material'
import GoogleIcon from "@mui/icons-material/Google";

import "./signup.css";
import app_config from "../config"; 

import Swal from "sweetalert2";

  

const AddVlog = () => {
        const url = app_config.api_url

         // Two important thing to use with Formik 
         //1. formobject
  
         const vlogForm ={
            title : '',
            thumbnail :'',
            file :'',
            category:'',
            author:'',
         };

         //2. submit callback function
        const vlogSubmit =(formdata) =>  {
           console.log(formdata);
              
            // three thing are required to request
            // 1. address
            // 2. http request method
            // 3. data and its format

            const reqOpt = {
                method : 'POST',
                body : JSON.stringify(formdata),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }

            fetch(url+'/vlog/add',reqOpt)
               .then( (res) => {
                 console.log(res.status);
                 return res.json();
                })
                .then((data) => {
                console.log(data);

                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "You have registered successfully!",
                });
            }) 
        };
        

    return (
        <div className="vlog-bg">
         <h1 className="text-center"> Signup Here</h1>
         <hr />
         <div className="col-md-4 mx-auto">
          <Card>
              <CardContent>
              <Formik initialValues={vlogForm} onSubmit={vlogSubmit}>
                 { ({ values, handleSubmit, handleChange }) =>(
                      <form onSubmit={handleSubmit}>
                      <lable className="mt-3">Title</lable>
                      <input placeholder="title" className="form-control" id="title" value={values.title} onChange={handleChange} />
     
                      <label className="mt-3">Thumbnail</label>
                      <input placeholder="thumbnail" className="form-control" id="thumbnail" value={values.thumbnail} onChange={handleChange} />
     
                      <label className="mt-3">File</label>
                       <input
                       placeholder="file"
                       className="form-control"
                       id="file" value={values.file} onChange={handleChange}
                       />

                       <label className="mt-3">Category</label>
                       <input
                       placeholder="categary"
                       className="form-control"
                       id="file" value={values.category} onChange={handleChange}
                       />

                      <label className="mt-3">Author</label>
                       <input
                       placeholder="author"
                       className="form-control"
                       id="author" value={values.author} onChange={handleChange}
                       />


                      <Button 
                      type="submit"
                      className="w-100 mt-5"
                      variant="contained"
                      color="secondary" 
                      startIcon={<GoogleIcon />}
                      
                      >
                      
                        Register to Continue
                      </Button>
                     
                  </form>
                 ) }
             </Formik>
            </CardContent>
          </Card>

         </div>
     </div>
    );
     };

export  default AddVlog;