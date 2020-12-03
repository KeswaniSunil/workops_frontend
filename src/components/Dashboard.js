import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link} from 'react-router-dom';
import "../styles/Dashboard.css";
import "../styles/CustomBreadcrumb.css";


const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Dashboard
                </div>
                <h1 className="dashboard__header__title">
                    Project Dashboard
                </h1>
            </div>
            <div className="dashboard__content">
                <div className="dashboard_content_dropdown">
                    <label>
                        Select Project
                    </label>
                    <select>
                        <option value="11"></option>
                        <option value="1">Tracker</option>
                        <option value="2">Business Automation Tool</option>
                        <option value="2">URL Shortener</option>
                    </select>
                </div>
                <div className="dashboard__content__cards">
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.35)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    15
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Issues
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.25)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    3
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Sprints
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.15)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    10
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Components
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.35)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    12
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Versions
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.25)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    7
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Team Size
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="dashboard__content__cards__card" style={{backgroundColor:"rgba(0,0,0,0.15)"}}>
                            <CardActionArea>
                            <CardContent>
                                <Typography className="dashboard__content__cards__card__projecttitle" gutterBottom variant="h5" component="h2">
                                    3
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Issues
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
