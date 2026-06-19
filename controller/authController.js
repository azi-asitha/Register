//Register
export const registerData = (req,res)=>{
  const {name}=req.body;

  if(name === "Ravi"){
    return res.status(200).json({
        success:true,
        message:"Registration Successful",
    });
  }
  return res.status(400).json({
    success:false,
    message:"Invalid User",
  });
    
};

//Login
export const loginData = (req,res)=>{
    const {email,password} = req.body;
    if(
        email === "asithaa@gmail.com" && password === "3786873"){
            return res.status(200).json({
                success:true,
                message:"Login Successful"
            });
        }
        return res.status(401).json({
            success:false,
            message:"Invalid Credntials",
        });
};

//params
export const getbyId = (req,res)=>{
    res.status(200).json({
        success:true,
        id:req.params.id,
        message:"User Found",
    });
};
//Query

export const getbyquery = (req,res)=>{
    res.status(200).json({
        success:true,
        search:req.query.name,
        message:"Search Completed",
    });
};
//Student
export const addStudent = (req,res)=>{
    res.status(201).json({
      success:true,
      data:req.body,
    });
};