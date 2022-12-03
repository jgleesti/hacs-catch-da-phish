import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Email from "../components/gmail/email";

export default function Home() {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState({
    from: "John",
    subject: "Hello",
    message: "How are you?",
  });

  return (
    <Container maxWidth="xl">
      <Head>
        <title>Spot da phish</title>
        <meta
          name="description"
          content="Taltech Humans Aspects of Cyber Security Assignment Four. An educational tool for Cyber Hygiene"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Typography variant="h1">Spot da phish</Typography>
        <Typography variant="h2">
          An educational tool for Cyber Hygiene
        </Typography>
        <Typography variant="h3">Total Score: 50</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setShowEmail(true);
          }}
        >
          Start
        </Button>
        {showEmail && <Email email={email} onClose={() => {setShowEmail(false)}} />}
      </main>
    </Container>
  );
}
