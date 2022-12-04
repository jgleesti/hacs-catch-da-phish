import { useState } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Email from "../components/gmail/email";
const contentful = require("contentful");

export default function Home({ emails }) {
  const [showEmail, setShowEmail] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [emailIndex, setEmailIndex] = useState(0);

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
        <Typography variant="h3">Total Score: {currentScore}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setShowEmail(true);
          }}
        >
          Start
        </Button>
        {showEmail && (
          <Email
            email={emails[emailIndex].fields}
            onClose={() => {
              setShowEmail(false);
            }}
            onSuccess={() => {
              setCurrentScore(currentScore + 10);
              setEmailIndex(emailIndex + 1);
            }}
            onFailure={() => {
              setCurrentScore(currentScore - 10);
              setEmailIndex(emailIndex + 1);
            }}
          />
        )}
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "email" });
  return {
    props: {
      emails: res.items,
    },
  };
}
