import { Route, Switch, useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { LottieLoad } from '../components/LottieLoad';

import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />;
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/admin/rooms/:id" component={AdminRoom} />
    </Switch>
  );
}
