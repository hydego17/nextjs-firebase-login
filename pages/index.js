import React from "react"
import Link from "next/link"
import { useAuth } from "../auth"
import Cointainer from "../components/Container"
import { Flex, Box, Button, Text, Heading, Stack } from "@chakra-ui/core"

export default function Home() {
  const { user } = useAuth()
  return (
    <Cointainer>
      <Flex>
        <Box w={500} p={4} my={12} mx="auto">
          <Heading as="h2" textAlign="center">
            Welcome to homepage
          </Heading>
          <Text mt={8} textAlign="center">
            <strong>User ID:</strong>
            {` ${user ? user.uid : "No user signed in"}`}
          </Text>
          <Box
            display={{ md: "flex" }}
            mt={8}
            alignItems="center"
            justifyContent="center
          "
            width="100%"
          >
            <Button
              mx={2}
              my={2}
              variant="solid"
              colorScheme="blue"
              width="100%"
              isDisabled={!user}
            >
              <Link href="/authenticated">
                <a>Go to authenticated route</a>
              </Link>
            </Button>
            <Button
              mx={2}
              variant="solid"
              colorScheme="teal"
              width="100%"
              isDisabled={user}
            >
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Cointainer>
  )
}
