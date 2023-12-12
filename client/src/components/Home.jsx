import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {

    return (
        <>
            <article className="home">
                <section className="hero">
                    <div className="title">
                        <h2>Game of Thrones</h2>
                        <h5>A fan-made compendium</h5>
                    </div>
                    <div className="home-nav">
                        <Link className="link" to="/houses"><i>GOT Houses</i></Link>
                        <Link className="link" to="/places"><i>Notorious Locations</i></Link>
                        <Link className="link" to="/characters"><i>Characters</i></Link>
                    </div>
                </section>
                <Container fluid>
                    <Row>
                        <Col
                            xs={6}
                            md={6}
                            lg={6}
                            className="info">

                            <h2>Title of Project</h2>
                            <section className='info-block'>
                                <h4>Project Info</h4>
                                <p>Title of Project is a fan-made project created by students of a <a href="#" target="_blank" rel="noopener noreferrer">General Assembly</a> Software Engineering Immersive course between the dates of 06/12/2023 and 15/12/2023. We do not own any of the intelluctual property used on this site, please find relevant links to the images and other assets used below.</p>

                                <section className="asset-links">
                                    <a href="https://awoiaf.westeros.org/index.php/Main_Page" target="_blank" rel="noopener noreferrer">House Crests<br />House Mottos<br />Character Images<br />Location Images</a><br />
                                    <a href="https://goodqueenaly.tumblr.com/tagged/house%20words%20wednesdays" target="_blank" rel="noopener noreferrer">Fan-made House Mottos</a>
                                    <a href="https://www.reddit.com/r/wallpapers/comments/8tmna8/loot_train_attack_wallpaper_game_of_thrones/" target="_blank" rel="noopener noreferrer">Home Page Background Image</a>
                                </section>
                            </section>
                        </Col>
                        <Col className="info">
                            <h2>About Us</h2>
                            <section className="info-block">
                                <h4>About the Creators</h4>
                                <p>GitHub:<br />
                                    <a href="https://github.com/NyashaDZT" target="_blank" rel="noopener noreferrer">Nyasha</a><br />
                                    <a href="https://github.com/benelliottkelly" target="_blank" rel="noopener noreferrer">Ben</a><br />
                                    <a href="https://github.com/danedmunds1" target="_blank" rel="noopener noreferrer">Dan</a>
                                </p>
                            </section>
                        </Col>
                    </Row>
                </Container>

            </article>
        </>
    )
}