import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import useStore from 'global-hook-store';

import { store } from '@src/store';
import { navItems } from '@src/data/config';
import { Navigation } from '@src/common/components/Navigation/Navigation';

const Main = styled.main`
    margin-top: 4rem;
    padding: 2rem;
`;

const App: React.FC = () => {
    const {
        actions: { loadQuestionsFromIndexDB },
    } = useStore(store);

    React.useEffect(() => {
        loadQuestionsFromIndexDB();
    }, []);

    return (
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
};

export default App;
