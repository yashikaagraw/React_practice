import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Box, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom"
// ctrl+shift+4= ₹
const ProductCard = ({ 
  category, 
  description, 
  image, 
  price, 
  rating, 
  title
}) => {
  return (
    <Box>
     <Card maxW='sm'>
  <CardBody>
    <Image
      src= {image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>{category}</Text>
      <Text color='blue.600' fontSize='2xl'> 
     Price:₹{price}
      </Text>
      <Text color="blue.600" fontSize="2xl">
     Rating: {rating.rate}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <RouterLink to= {`/products/${id}`} replace={true} />
      <Button variant='solid' colorScheme='blue'>
        More Details
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </Box>
  )
}

export default ProductCard
