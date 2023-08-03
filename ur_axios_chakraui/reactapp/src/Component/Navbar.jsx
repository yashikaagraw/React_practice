import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
const Navbar = () => {
    const links= [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Products",
            path: "/products",
        },
        {
            title: "Login",
            path: "/login",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ]
  return (
    //<div style={{ display : "flex", justifyContent: "space-around"}}>
    <Flex color='black' bg='blue.500' justifyContent= 'space-around'> 
      {
        links.map((link)=> (
        <RouterLink key={link.path} to={link.path}>
       {link.title}
        </RouterLink>))
      }
    </Flex>
  )
}

export default Navbar
