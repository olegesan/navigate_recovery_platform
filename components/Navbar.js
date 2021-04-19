import { useState } from "react";
import { useAuth } from "../utils/auth";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: "750px",
    flexGrow: 1,
  },
  title1: {
    marginLeft: "5px",
    marginRight: "10px",
  },
  signupButton: {
    marginLeft: "300px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const auth = useAuth();
  const admin = auth?.authState?.tokenResult?.claims?.admin;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <Link href="/">
              <Button
                className={classes.title1}
                variant="outlined"
                color="secondary"
              >
                {" "}
                Main{" "}
              </Button>
            </Link>

            <Button
              className={classes.title1}
              variant="outlined"
              color="secondary"
              href="/peer"
            >
              Peer
            </Button>

            <Link href="/resources">
              <Button
                className={classes.title1}
                variant="outlined"
                color="secondary"
              >
                Resources
              </Button>
            </Link>
            {admin ? (
              <Link href="/admin">
                <Button
                  className={classes.title1}
                  variant="outlined"
                  color="secondary"
                >
                  Admin
                </Button>
              </Link>
            ) : (
              ""
            )}
          </Typography>

          <Typography className={classes.title}>
            {auth?.user ? (
              <>
                <span>{auth.user.email}</span>{" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => auth.signout()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  className={classes.signupButton}
                  variant="outlined"
                  color="secondary"
                >
                  <Link href="/auth/signin">Signin</Link>{" "}
                </Button>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
