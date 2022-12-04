import { useState } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Email from "../components/gmail/email";
const contentful = require("contentful");

export default function Home({ emails }) {
  const [showEmail, setShowEmail] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [emailIndex, setEmailIndex] = useState(0);

  const nextEmail = () => {
    const newIndex = emailIndex + 1;
    if (newIndex < emails.length) {
      setEmailIndex(emailIndex + 1);
    } else {
      setShowEmail(false);
      setEmailIndex(0);
    }
  };

  return (
    <Container maxWidth="xl">
      <Head>
        <title>Spot da phish</title>
        <meta
          name="description"
          content="Taltech Humans Aspects of Cyber Security Assignment Four. An educational tool for cyber cygiene"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Typography variant="h1">Spot da phish</Typography>
        <Typography variant="h3">
          An educational tool for cyber hygiene
        </Typography>
        <Typography variant="h4">Total Score: {currentScore}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setShowEmail(true);
          }}
        >
          Start
        </Button>
        {showEmail && (
          <Modal
            open={showEmail}
            onClose={() => {
              setShowEmail(false);
            }}
          >
            <Box>
              <Email
                emailNumber={emailIndex + 1}
                totalEmails={emails.length}
                email={emails[emailIndex].fields}
                onSuccess={() => {
                  setCurrentScore(currentScore + 10);
                  nextEmail();
                }}
                onFailure={() => {
                  setCurrentScore(currentScore - 10);
                  nextEmail();
                }}
              />
            </Box>
          </Modal>
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
