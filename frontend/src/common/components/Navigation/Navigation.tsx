import * as React from 'react';
//@ts-ignore
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

import { colors } from '@src/variables';
import { navItems } from '@src/data/config';

const NavBar = styled.div`
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    width: 100%;
    height: 4rem;
    background-color: ${colors.navbarBackgroundColor};
    padding: 0 4rem;
`;

const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    list-style: none;
    flex: 0 1 auto;
    width: 8rem;
    height: 100%;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${colors.textColor};
    & ${NavItem} {
        &:hover {
            background-color: ${colors.hoverNavbarBgColor};
            color: ${colors.secondaryTextColor};
        }
    }
`;

export const Navigation: React.FC = () => (
    <NavBar>
        {navItems.map(({ id, name, path }) => (
            <NavLink key={id} to={path}>
                <NavItem>{name}</NavItem>
            </NavLink>
        ))}
    </NavBar>
);
