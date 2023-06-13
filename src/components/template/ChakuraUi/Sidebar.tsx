"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Box,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Collapse,
} from "@chakra-ui/react";

function ChakuraUi() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.200",
        }}
        _hover={{
          bg: "gray.100",
          _dark: {
            bg: "gray.900",
          },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box className="fixed top-0 left-0 h-full pb-3 overflow-x-hidden overflow-y-scroll bg-white"
      as="nav"
      zIndex="sticky"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        
        <Text
          fontSize="2xl"
          ml="2"
          color="brand.500"
          _dark={{
            color: "white",
          }}
          fontWeight="semibold"
        >
          Choc UI
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <h4 className="text-lg text-center font-semibold py-2">Design System</h4>
        <NavItem>Hero</NavItem>
        <NavItem>Features</NavItem>
        <NavItem>Footer</NavItem>
        <NavItem>Testimonials</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Cards
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Blogs
          </NavItem>
          <NavItem pl="12" py="2">
            Ecommerce
          </NavItem>
        </Collapse>
        <NavItem>Statistics</NavItem>
        <NavItem>Carousels</NavItem>
        <NavItem>Button</NavItem>
        
        <h4 className="text-lg text-center font-semibold py-2">NAVIGATION</h4>
        <NavItem>Navbar</NavItem>
        <NavItem>Sidebar</NavItem>
        
        <h4 className="text-lg text-center font-semibold py-2">FORMS</h4>
        <NavItem>Authentication</NavItem>
        <NavItem>Newsletter</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Multi Step Forms</NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box as="section">
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
        className='items-center justify-between w-full px-4 bg-white'
          as="header"
          _dark={{
            bg: "gray.800",
          }}
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
       
        </Flex>

  
      </Box>
    </Box>
  );
}

export default ChakuraUi;
