import React, {useContext} from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from '../routes/Home/Home'
import MovieDetail from '../routes/MovieDetail/MovieDetail'
import GameDetail from '../routes/GameDetail/GameDetail'
import Movies from '../routes/Movies/Movies'
import Games from '../routes/Games/Games'
import Authen from '../routes/Authentication/Authen'
import {UserContext} from '../context/UserContext'
import ChangePassword from "../routes/ChangePassword/ChangePassword";
import MovieEditor from "../routes/MovieEditor/MovieEditor";
import GameEditor from "../routes/GameEditor/GameEditor";
import MovieAdd from "../routes/MovieAdd/MovieAdd";
import GameAdd from "../routes/GameAdd/GameAdd";
import GameEdit from "../routes/GameEdit/GameEdit";
import MovieEdit from "../routes/MovieEdit/MovieEdit";
import Redirects from '../routes/Redirects'
import { Layout, Menu} from 'antd';
const { Content } = Layout;

function Core() {

    const [user, setUser] = useContext(UserContext)


    const LoginRoute = ({user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

    const PrivateRoute = ( {user, ...props }) => {
        if (user) {
          return <Route {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      };

    return (
        <div>
            <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content" >
              <Switch>
                  <Route component={Home} exact path='/'/>
                  <Route component={MovieDetail} exact path='/movies/:id'/>
                  <Route component={GameDetail} exact path='/games/:id'/>
                  <Route component={Movies} exact path='/movies'/>
                  <Route component={Games} exact path='/games'/>
                  <LoginRoute user={user} component={Authen} exact path='/login'/>
                  <PrivateRoute user={user} component={ChangePassword}  exact path='/change-password' /> 
                  <PrivateRoute user={user} component={MovieEditor}  exact path='/movie-editor' /> 
                  <PrivateRoute user={user} component={GameEditor}  exact path='/game-editor' /> 
                  <PrivateRoute user={user} component={MovieAdd}  exact path='/movie-editor/add' /> 
                  <PrivateRoute user={user} component={GameAdd}  exact path='/game-editor/add' /> 
                  <PrivateRoute user={user} component={MovieEdit}  exact path='/movie-editor/:id/edit' /> 
                  <PrivateRoute user={user} component={GameEdit}  exact path='/game-editor/:id/edit' />
                  <Route
                    path="*"
                    component={Redirects}
                  /> 
              </Switch>
              </div>
            </Content>
            </Layout>
        </div>
    )
}

export default Core
