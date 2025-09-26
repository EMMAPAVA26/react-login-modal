import { Button, FormControl, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const InpuntTask = ({setName ,setModalIsOpen}) => {
    
const [user,setUser] =useState("");
const [password,setPassword] = useState("");
const [error, setError] = useState(false);

const handleSubmit = (e) =>{
e.preventDefault(); //No recarga la pagina 
if(user.trim() === "" || password.trim() === ""){
  setError(true);
  return
}
setError(false);
setName(user);
setModalIsOpen(true);


}
  
  
  return (
     <FormControl
     component="form"
     sx={{
        width:"100%",
        maxWidth:400,
        mx:"auto",
        mt:25,
        p:4,
       display:"flex",
       justifyContent:"center",
      //  backgroundColor :"rgba(244, 236, 236, 0.1)"

     }}
     onSubmit={handleSubmit}
     >
      <Stack
      spacing={3} 
      alignItems="center"
      >

      <TextField
      label = "usuario" 
      variant="outlined"
      autoComplete="username"
      fullWidth
      onChange={(e) =>setUser(e.target.value)}
      value={user}
     
     />

      {/* </TextField> */}

      <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          fullWidth
        />
        <Stack spacing={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Iniciar sesion
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              setUser("");
              setPassword("");
            }}
          >
            Limpiar
          </Button>
        </Stack>
        {error && <Typography>Debes llenar todos los campos</Typography>}
      </Stack>

    </FormControl>
    )
}