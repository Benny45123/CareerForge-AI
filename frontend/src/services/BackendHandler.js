const postData=async ({data,token}) =>{
    const formData = new FormData();
    formData.append('jobDescription', data.jobDescription);
    formData.append('skillsFocus', data.skills);
    formData.append('resume', data.resume);
    formData.append('recruiterName', data.recruiterName);
    formData.append('recruiterDesignation', data.designation);
    formData.append('companyName', data.companyName);
    try {
        const response = await fetch('http://localhost:3120/api/cover-letter/generate-cover-letter', {
            method: 'POST',
            body: formData,
            headers: {
                'authorization': `Bearer ${token}`
            }
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
        const response = await fetch('http://localhost:3120/api/register', {
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
        const response =await fetch('http://localhost:3120/api/login',{
            method:'POST',
            body: JSON.stringify(data),
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
        })
        const result =await response.json();
        const {token}=result;
        return token;
    }
    catch(error){
        console.error('Error:',error);
    }
}
export {postData,Register,Login};