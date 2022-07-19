import weightLogo from './assets/weight.svg'
import Form from "./Form";
import {Container, Grid, Avatar} from "@mui/material";
import {StoreContext} from "./store";
import {useState} from "react";
import Bar from "./Bar";

function App() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [generated, setGenerated] = useState(false);
    const [errors, setErrors] = useState('');

    const onWeight = (value:string) => { setWeight(value);}
    const onHeight = (value:string) => { setHeight(value); }
    const onGenerated = (value:boolean) => { setGenerated(value);}
    const onErrors = (value:string) => { setErrors(value);}
    return (
        <StoreContext.Provider value={{
            weight, height, errors, generated,
            onWeight, onHeight, onGenerated, onErrors
        }}>
            <Container maxWidth="md" fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item>
                                <Avatar
                                    alt="Weight & Height"
                                    src={weightLogo}
                                    sx={{width: 120, height: 120}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Form/>
                    </Grid>
                    {(generated && (
                        <Grid item xs={12}>
                            <Bar />
                        </Grid>
                    )) || null}
                </Grid>
            </Container>
        </StoreContext.Provider>
    )
}

export default App
