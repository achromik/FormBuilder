import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';

import { navItems } from '@src/data/config';
import { Navigation } from '@src/common/components/Navigation/Navigation';

const Main = styled.main`
    margin-top: 4rem;
    padding: 2rem;
`;


const App: React.FC = () => (
    <Router>
        <Navigation />
        <Main>
            <Switch>
                    {navItems.map(({ path, Component }) => (
                        <Route key={path} exact path={path} component={Component} />
                    ))}
            </Switch>
        </Main>
    </Router>
);

export default App;
