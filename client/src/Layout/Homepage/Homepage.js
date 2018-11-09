import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import classes from './homepage.css';
import BoxList from '../BoxList/BoxList'
import Button from '../../Components/UI/Button/Button';
import Background from '../../Components/Background/Background';
// import GeogebraImg from './Geogebra.png';
// import DesmosImg from './desmos.jpg';
import Aux from '../../Components/HOC/Auxil';

class Homepage extends PureComponent {

  containerRef = React.createRef()
  componentDidMount(){
    if (Object.keys(this.props.activities).length === 0) {
      this.props.getActivities();
    }
  }
  
  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.rooms).length < Object.keys(this.props.rooms).length) {
      const currentRooms = Object.keys(this.props.rooms).map(id => this.props.rooms[id])
      const prevRooms = Object.keys(prevProps.rooms).map(id => prevProps.rooms[id])
      let room = currentRooms.filter(room => !prevRooms.includes(room))
      this.props.history.push(`explore/${room[0]._id}`)
    }
  }

  
  createRoom = () => {
    this.props.createRoom({
      name: 'temp room',
      tempRoom: true,
    })
  }

  scrollToDomRef = () => {
    window.scroll({top: this.containerRef.current.offsetTop - 100, left: 0, behavior: 'smooth'})
}

  render() {
    let list = Object.keys(this.props.activities).map(id => this.props.activities[id]) || []
    return (
      <Aux>
        <Background/>
        {/* <div className={classes.BackgroundExtension}></div> */}
        {/* <div className={classes.Ex2}></div>
        <div className={classes.Ex3}></div>
        <div className={classes.Ex4}></div>
        <div className={classes.Ex5}></div>
        <div className={classes.Ex6}></div> */}
        <div className={classes.Main}>
          <section className={classes.Top}>
            <p className={classes.Blurb}>
              Collaborative Workspaces for Exploring the World of Math 
            </p>
            <Button theme={'Big'} click={this.createRoom} m={35}>Try out a Workspace</Button>
          </section>
          {/* <i onClick={this.scrollToDomRef} className={["fas fa-chevron-down", classes.Down].join(" ")}></i> */}
          <section className={classes.Options} ref={this.containerRef}>
            <h3 className={classes.Subtitle}>Popular Activities</h3>
            <BoxList list={list}/>
            {/* <div className={classes.Geogebra}>
              <img className={classes.GgbImage} src={GeogebraImg} alt='geogebra' />
              <div>
                <p className={classes.LongerBlurb}>GeoGebra is dynamic mathematics software for all levels of education that 
                  brings together geometry, algebra, spreadsheets, graphing, statistics and 
                  calculus in one easy-to-use package. GeoGebra is a rapidly expanding 
                  community of millions of users located in just about every country.
                </p>
                <Link to='https://www.geogebra.org'>Learn More</Link>
              </div>
            </div>
            <div className={classes.Desmos}>
              <img className={classes.DesmosImage} src={DesmosImg} alt='desmos' />
              <p className={classes.LongerBlurb}>
                Desmos is a free graphing calculator with a large community of teachers and students actively 
                building and sharing activities. 
              </p>
            </div> */}
          </section>
        </div>
      </Aux>
    )
  }
}

export default Homepage;