import React from "react"
import nookies from "nookies"
import { verifyIdToken } from "../firebaseAdmin"
import firebaseClient from "../firebaseClient"
import firebase from "firebase/app"
import { Box, Flex, Text, Heading, Button, useId } from "@chakra-ui/core"

function Authenticated({ session, email, uid }) {
  firebaseClient()
  if (session) {
    return (
      <Flex flexDirection="column" justify="center" alignItems="center">
        <Box w={500} p={4} my={6} mx="auto">
          <Heading as="h2" textAlign="center" my={6} mb={12}>
            Dashboard
          </Heading>
          <Text fontSize="1.4rem" textAlign="center" mb={4}>
            Welcome
          </Text>
          <Text textAlign="center">
            Your uid is <strong>{uid}</strong>
          </Text>
          <Text textAlign="center">
            Your email is <strong>{email}</strong>{" "}
          </Text>
          <Text textAlign="center" my={6}>
            Do whatever you want now you are Authenticated
          </Text>
        </Box>
        <Box w={500} mx="auto" p={8}>
          <Button
            w="100%"
            variant="solid"
            colorScheme="teal"
            onClick={async () => {
              await firebase.auth().signOut()
              window.location.href = "/"
            }}
          >
            Sign Out
          </Button>
        </Box>
      </Flex>
    )
  } else {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    )
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const token = await verifyIdToken(cookies.token)
    const { uid, email } = token

    return {
      props: { session: true, uid, email },
    }
  } catch (err) {
    context.res.writeHead(302, { location: "/login" })
    context.res.end()
    return { props: [] }
  }
}
export default Authenticated
