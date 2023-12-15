import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {

    const currentYear = new Date().getFullYear();

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

                            <h2>GOT Compendium</h2>
                            <section className='info-block'>
                                <h4>Project Info</h4>
                                <p>Game of Thrones Compendium is a fan-made project created by students of a <a href="https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=18014985984&mkt_ad_group_id=143659601967&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=680716276517&mkt_network=g&mkt_target_id=aud-387824918555:kwd-300765785657&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:UK:BR:GeneralAssembly:X:Exact&utm_content=campus-lead-lander&utm_term=general%20assembly&gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT_kspPh_3y1mr1_VIW0sVEYz6ElIYfePjmemYqZvR-aGJc-TMCPGUYaAvcrEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">General Assembly</a> Software Engineering Immersive course between the dates of 06/12/2023 and 15/12/2023. We do not own any of the intelluctual property used on this site, please find relevant links to the images and other assets used below.</p>

                                <section className="asset-links">
                                    <a href="https://awoiaf.westeros.org/index.php/Main_Page" target="_blank" rel="noopener noreferrer">Images & Mottos</a><br/>
                                    <a href="https://goodqueenaly.tumblr.com/tagged/house%20words%20wednesdays" target="_blank" rel="noopener noreferrer">Fan-made House Mottos</a><br/>
                                    <a href="https://www.reddit.com/r/wallpapers/comments/8tmna8/loot_train_attack_wallpaper_game_of_thrones/" target="_blank" rel="noopener noreferrer">Home Page Background Image</a>
                                    <a href="https://awoiaf.westeros.org/index.php/World_Map_(HBO_Game_Of_Thrones)" target="_blank" rel="noopener noreferrer">Map Image</a>

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
            <footer>&copy; No Big Deal (NBD) Enterprises {currentYear} </footer>
        </>
    )
}