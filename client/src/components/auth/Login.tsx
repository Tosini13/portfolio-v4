import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthStoreContext } from "../../stores/AuthStore";
import { mainTheme } from "../../styled/config";
import TextFieldRC from "../../styled/form/inputs";
import { E_ROUTES } from "../../hooks/useRoutes";
import { Processing } from "../../styled/dialog";
import useAction from "../../hooks/useAction";

const LinkStyled = styled(Link)`
  color: ${mainTheme.palette.text.secondary};
`;

const PaperStyled = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${mainTheme.palette.primary.main};
  padding: 50px;
  min-width: 200px;
`;

type TLoginForm = {
  email: string;
  password: string;
};

export interface LoginProps {}

const Login: React.FC<LoginProps> = observer(() => {
  const authStore = useContext(AuthStoreContext);
  const router = useHistory();
  const { isProcessing, execute } = useAction();
  const { register, handleSubmit } = useForm<TLoginForm>();

  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);

  const onSubmit = async (data: TLoginForm) => {
    const promise = authStore.logIn({
      email: data.email,
      password: data.password,
      failureCallBack: () => {
        setWrongCredentials(true);
      },
    });
    await execute(promise);
  };

  if (authStore.isLoggedIn) {
    router.push(E_ROUTES.about);
  }

  const { ref: emailRef, ...emailProps } = register("email");
  const { ref: passwordRef, ...passwordProps } = register("password");
  return (
    <PaperStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={5} alignItems="center">
          <Grid item>
            <Typography color="secondary">Logowanie</Typography>
          </Grid>
          <Grid item>
            <TextFieldRC inputRef={emailRef} {...emailProps} label="email" />
          </Grid>
          <Grid item>
            <TextFieldRC
              inputRef={passwordRef}
              {...passwordProps}
              type="password"
              label="hasło"
            />
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Button variant="outlined" color="secondary" type="submit">
                  Zaloguj
                </Button>
              </Grid>
              <Grid item>
                <Typography color="error">
                  {wrongCredentials ? "Wrong email or password!" : ""}
                </Typography>
              </Grid>
              <Grid item>
                <LinkStyled to={E_ROUTES.resetPassword}>
                  Forgot passowrd
                </LinkStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {isProcessing && <Processing />}
    </PaperStyled>
  );
});

export default Login;
