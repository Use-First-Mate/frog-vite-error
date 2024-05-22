import { Button, Frog, TextInput } from 'frog'
import { createSystem } from "frog/ui";
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

const {
  Box, Text, Rows, Row, Columns,Column, VStack, HStack, Image, vars
} = createSystem({    frame: {
  height: 1024,
  width: 1024,
},})
export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  ui: {vars},
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  return c.res({
    image: (
      <Box background="amber900" padding="20">
        <Rows alignVertical="space-between" alignHorizontal="center">
          <Row backgroundColor="amber900" width="100%" height="1/3">
            <Columns padding="20">
              <Column alignHorizontal="center" 
                backgroundColor="teal" 
                width="1/4">
                <Image src="https://creator-frame-frog.vercel.app/degen.png"/>
                <Text> 
                  Remove this node to get page to work
                </Text>
                <Text>
                  @test text
                </Text>
                <HStack gap="8">
                  <Text>Page</Text>
                  <Text>Working%</Text>
                </HStack>
              </Column>
              <Column alignHorizontal="center" backgroundColor="amber" width="1/4">
                <Text>
                 Test Name
                </Text>
                <Text>
                  Blah blah
                </Text>
              </Column>
              <Column alignHorizontal="center" backgroundColor="amber" width="1/4">
              </Column>
              <Column alignHorizontal="center" backgroundColor="amber" width="1/4">d</Column>
            </Columns>
          </Row>
          <Row height="1/3">
            <Columns gap="8" grow>
              <Column width="1/4">x</Column>
              <Column width="1/4">x</Column>
              <Column width="1/4">x</Column>
              <Column width="1/4">x</Column>
            </Columns>
          </Row>
          </Rows>
      </Box>
    ),
    imageAspectRatio: "1:1",
    imageOptions: {
      width: 1024,
      height: 1024
    },
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
    ],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
