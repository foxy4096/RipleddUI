import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'

const SideBlock = () => {
  return (
    <Card>
        <CardHeader>
            <Heading size={'md'}>Channels</Heading>
        </CardHeader>
        <CardBody>
            Side Block
            some data will come here
        </CardBody>
    </Card>
  )
}

export default SideBlock