import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link} from 'react-router-dom';
import "../styles/Projects.css";
import "../styles/CustomBreadcrumb.css";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // maxHeight:250
  },
  media: {
    height: 80,
    width:100
  }
});

const Projects = () => {
    const classes = useStyles();
    return (
        <div class="projects">
            <div className="projects__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Project Settings
                </div>
                <h1 className="projects__header__title">
                    All Projects
                </h1>
            </div>
            <div className="projects__content">
                <div className="projects__content__addproject">
                    <div>
                        <button type="button">
                            <Link to="/createproject" style={{color:"inherit",margin:"0px"}}>
                                    Create New
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="projects__content__cards">
                    <Card className={classes.root} style={{backgroundColor:"rgba(0,0,0,0.14)"}}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/projectIcon1.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography className="projects__content__cards__projecttitle" gutterBottom variant="h5" component="h2">
                            Tracker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lectus ac lobortis accumsan. Aliquam felis mauris, vulputate a ullamcorper et</Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Selected
                        </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/projectIcon2.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" className="projects__content__cards__projecttitle" component="h2">
                            Url shortener
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Aliquam eget dolor id leo posuere tempor eu a odio. Integer lacinia tincidunt nulla, non elementum purus fringilla vitae. Aenean at augue ac nunc scelerisque volutpat.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Switch
                        </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/projectIcon3.png'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom className="projects__content__cards__projecttitle" variant="h5" component="h2">
                            Business Automation Tool
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Switch
                        </Button>
                        </CardActions>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Projects;
