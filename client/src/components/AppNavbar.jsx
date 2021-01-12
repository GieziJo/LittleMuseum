import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input,
    InputGroupAddon,
    InputGroup,
    Container
  } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'

class AppNavbar extends Component{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand tag={RRNavLink} to="/">Anaël's strange Museum</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to={`/addItem`}>
                                        Add Item
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                            <InputGroup size="sm" className="w-25 ml-auto">
                                <Input type="search" placeholder="Search..." />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                    </Button></InputGroupAddon>
                            </InputGroup>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

  export default AppNavbar;