import { Body, Button, Container, Head, Heading, Html, Section, Text } from "@react-email/components";
import * as React from "react";

interface VerifyEmailProps {
  verificationLink?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const ResetPassword = ({ verificationLink }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={headingContainer}>
          <Heading style={primary}>🔐 Authentication Test</Heading>
        </Section>
        <Text style={tertiary}>Reset your password</Text>
        <Heading style={secondary}>Click the following link to set a new password</Heading>
        <Section style={buttonContainer}>
          <Button style={button} href={verificationLink}>
            Reset Password
          </Button>
        </Section>
      </Container>
      <Text style={footer}>Made with ❤️ by Ling Vu</Text>
    </Body>
  </Html>
);

export default ResetPassword;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "32px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};
const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};
const primary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "28px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const headingContainer = {
  margin: "8px auto",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};
