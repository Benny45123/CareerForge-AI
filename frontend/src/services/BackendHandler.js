const postData=async ({data}) =>{
    const formData = new FormData();
    formData.append('jobDescription', data.jobDescription);
    formData.append('skillsFocus', data.skills);
    formData.append('resume', data.resume);
    formData.append('recruiterName', data.recruiterName);
    formData.append('recruiterDesignation', data.designation);
    formData.append('companyName', data.companyName);
    try {
        const response = await fetch('/api/cover-letter/generate-cover-letter', {
            method: 'POST',
            body: formData,
            credentials:'include'
        })
        const result = await response.json();
        console.log('Success:', result.coverLetter);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
const Register=async ({name,email,password}) =>{
    const data={name,email,password};
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
        })
        const result = await response.json();
        console.log('Success:', result.message);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
const Login =async ({email,password})=>{
    const data={email,password};
    try {
        const response =await fetch('/api/login',{
            method:'POST',
            credentials:'include',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const result =await response.json();
        if(response.ok){
            console.log('Success:', result.message);
            return true;
        }
        else{
            throw new Error(result.message);
        }
    }
    catch(error){
        console.error('Error:',error);
    }
}
const checkLogin=async({setUser})=>{
    try{
      const response=await fetch('/api/user',{
        method:'GET',
        credentials:'include',
      });
      if(response.ok){
        const data=await response.json();
        console.log(data);
        setUser(data.user);
      }
    }
    catch(error){
      console.error('Error:',error);
      
    }
  }

  const handleLogout=async ({setUser})=>{
    try{
      const response=await fetch('/api/logout',{
        method:'POST',
        credentials:'include',
      });
      if(response.ok){
        setUser(null);
        window.location.reload();
      }
    }
    catch(error){
      console.error('Error:',error);
    }
  }
export {postData,Register,Login,checkLogin,handleLogout};  