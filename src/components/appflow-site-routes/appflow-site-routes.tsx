import { Component, Host, h } from '@stencil/core';

import {
  Route, 
  // match 
} from 'stencil-router-v2';

import { InternalRouterState } from 'stencil-router-v2/dist/types';

import state from '../../store';
import Router from '../../router';

@Component({
  tag: 'appflow-site-routes',
  styleUrl: 'appflow-site-routes.css',
})
export class AppflowSiteRoutes {

  componentWillLoad() {
    Router.onChange('url', (newValue: InternalRouterState['url'], _oldValue: InternalRouterState['url']) => {
      (window as any).gtag('config', 'UA-44023830-42', { 'page_path': newValue.pathname + newValue.search });
      state.pageTheme = 'light';
    });
  }

  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <landing-page />
          </Route>
          <Route path="/why-appflow">
            <why-appflow />
          </Route>
        </Router.Switch>
      </Host>
    );
  }

}
