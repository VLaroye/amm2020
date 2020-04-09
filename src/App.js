import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCampground, faUtensils, faGlobeAmericas, faChevronRight, faChevronLeft, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faSoundcloud, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import "animate.css/animate.min.css";

// ROUTING
import routes from 'utils/router';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// THEME
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'utils/theme';

// COMPONENTS
import Layout from 'components/layout/Layout';
import ScrollToTop from 'components/ScrollToTop';

library.add( faCampground, faUtensils, faFacebookSquare, faCircle, faSoundcloud, faYoutube, faTwitter, faInstagram, faGlobeAmericas, faHeart, faChevronRight, faChevronLeft )

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  ${media.laptop`
    overflow-y: hidden;
  `}
`;

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Router>
          <ScrollToTop>
            <Layout>
              <Switch>
                {routes.map(({ exact, path, name, component }) => <Route exact path={path} name component={component} key={name}/>)}
              </Switch>
            </Layout>
          </ScrollToTop>
        </Router>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
