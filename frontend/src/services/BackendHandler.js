const postData=async (data) =>{
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
            body: formData
        })
        const result = await response.json();
        console.log('Success:', result.coverLetter);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
export {postData};