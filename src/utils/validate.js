
export const validate = (email,password,name) => {
   const validEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const validPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
   const validName=name && /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());
   
//    "Error from Name"
    if(name && !validName) return "# invalid name !";
    if(!validEmail) return "# invalid email !";
    if(!validPass) return "# invalid Password !";
    else return null 
}
