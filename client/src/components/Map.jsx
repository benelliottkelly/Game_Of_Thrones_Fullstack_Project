import { useLoaderData, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import mapImg from '../images/GoT-map.jpg'

export default function Map() {
  const navigate = useNavigate()
  const places = useLoaderData()
  console.log(places)

  const [xCoord, setXCoord] = useState()
  const [yCoord, setYCoord] = useState()
  const [display, setDisplay] = useState("none")
  const [placeName, setPlaceName] = useState()
  const [picture, setPicture] = useState()

  function navigateToPage(e) {
    const markerClicked = e.target.className.baseVal
    const pattern = new RegExp(markerClicked, 'i')
    if (places) {
      const nameMatch = places.filter(place => {
        return pattern.test((place.name).replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""))
      })
      navigate(`/places/${nameMatch[0].id}`)
    }
  }

  function showPopup(e) {
    console.log(e.target.className.baseVal)
    setXCoord(e.nativeEvent.offsetX)
    setYCoord(e.nativeEvent.offsetY)
    setDisplay("inline-block")
    const markerClicked = e.target.className.baseVal
    const pattern = new RegExp(markerClicked, 'i')
    if (places) {
      const nameMatch = places.filter(place => {
        return pattern.test((place.name).replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""))
      })
      setPlaceName(nameMatch[0].name)
      setPicture(nameMatch[0].image)
    }
  }

  function hidePopup() {
    setDisplay('none')
  }

  return (
    <div className='map-container'>
      <div className="map-popup" style={{ display: display, left: xCoord, top: yCoord}}>
        <h1>{placeName}</h1>
        <img className='hover-image' src={picture} alt={`Image of ${placeName}`} />
      </div>
      <svg className='map'
        width="100%"
        viewBox="0 0 747.71252 487.36249"
        version="1.1"
        id="svg1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg">
        <defs
          id="defs1" /><g
            id="layer1"
            transform="translate(284.50303,74.380392)"><image
            width="747.71252"
            height="487.36249"
            preserveAspectRatio=" none"
            style={{ imageRendering: 'optimizeQuality' }}
            xlinkHref={mapImg}
            id="image1"
            x="-284.50302"
            y="-74.380394" /><ellipse className='hornvale' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
              style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
              id="path2-0-3-97"
              cx="-151.85141"
              cy="179.53764"
              rx="3.8447747"
              ry="3.7246256" /><ellipse className='blackhaven' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                id="path2-0-3-95"
                cx="-112.83647"
                cy="257.72464"
                rx="3.8447747"
                ry="3.7246256" /><ellipse className='summerhall' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                  style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                  id="path2-0-3-60"
                  cx="-94.051056"
                  cy="241.58504"
                  rx="3.8447747"
                  ry="3.7246256" /><ellipse className='barrowton' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                    style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                    id="path2-0-3-9"
                    cx="-156.49272"
                    cy="64.578789"
                    rx="3.8447747"
                    ry="3.7246256" /><ellipse className='runestone' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                      style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                      id="path2-0-3-42"
                      cx="-42.122482"
                      cy="138.18973"
                      rx="3.8447747"
                      ry="3.7246256" /><ellipse className='deepwoodmotte' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                        style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                        id="path2-0-3-28"
                        cx="-157.55106"
                        cy="2.137125"
                        rx="3.8447747"
                        ry="3.7246256" /><ellipse className='stormsend' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                          style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                          id="path2-0-3-6"
                          cx="-64.946892"
                          cy="237.61629"
                          rx="3.8447747"
                          ry="3.7246256" /><ellipse className='thecrag' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                            style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                            id="path2-0-3-8"
                            cx="-181.36356"
                            cy="160.62254"
                            rx="3.8447747"
                            ry="3.7246256" /><ellipse className='seagard' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                              style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                              id="path2-0-3-2"
                              cx="-138.50105"
                              cy="127.81421"
                              rx="3.8447747"
                              ry="3.7246256" /><ellipse className='greywaterwatch' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                id="path2-0-3-00"
                                cx="-133.47397"
                                cy="101.88504"
                                rx="3.8447747"
                                ry="3.7246256" /><ellipse className='whiteharbor' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                  style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                  id="path2-0-3-3"
                                  cx="-103.84064"
                                  cy="66.430878"
                                  rx="3.8447747"
                                  ry="3.7246256" /><ellipse className='starfall' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                    style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                    id="path2-0-3-0"
                                    cx="-156.75731"
                                    cy="290.79755"
                                    rx="3.8447747"
                                    ry="3.7246256" /><ellipse className='vaesdothrak' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                      style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                      id="path2-0-94"
                                      cx="264.45059"
                                      cy="232.03857"
                                      rx="3.8447747"
                                      ry="3.7246256" /><ellipse className='oldvalyria' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                        style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                        id="path2-0-6"
                                        cx="154.65729"
                                        cy="377.84543"
                                        rx="3.8447747"
                                        ry="3.7246256" /><ellipse className='sunspear' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                          style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                          id="path2-0-16"
                                          cx="-46.690639"
                                          cy="304.29129"
                                          rx="3.8447747"
                                          ry="3.7246256" /><ellipse className='thetwins' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                            style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                            id="path2-0-26"
                                            cx="-133.9127"
                                            cy="115.85407"
                                            rx="3.8447747"
                                            ry="3.7246256" /><ellipse className='yunkai' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                              style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                              id="path2-0-28"
                                              cx="249.90729"
                                              cy="282.59543"
                                              rx="3.8447747"
                                              ry="3.7246256" /><ellipse className='pentos' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                id="path2-0-98"
                                                cx="9.2091827"
                                                cy="197.20776"
                                                rx="3.8447747"
                                                ry="3.7246256" /><ellipse className='qarth' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                  style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                  id="path2-0-56"
                                                  cx="414.47141"
                                                  cy="346.22922"
                                                  rx="3.8447747"
                                                  ry="3.7246256" /><ellipse className='molestown' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                    style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                    id="path2-0-72"
                                                    cx="-95.903137"
                                                    cy="-34.849396"
                                                    rx="3.8447747"
                                                    ry="3.7246256" /><ellipse className='meereen' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                      style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                      id="path2-0-96"
                                                      cx="260.22604"
                                                      cy="271.48294"
                                                      rx="3.8447747"
                                                      ry="3.7246256" /><ellipse className='castleblack' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                        style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                        id="path2-0-12"
                                                        cx="-96.432297"
                                                        cy="-43.373684"
                                                        rx="3.8447747"
                                                        ry="3.7246256" /><ellipse className='volantis' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                          style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                          id="path2-0-23"
                                                          cx="96.184364"
                                                          cy="308.5246"
                                                          rx="3.8447747"
                                                          ry="3.7246256" /><ellipse className='riverrun' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                            style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                            id="path2-0-3"
                                                            cx="-139.82397"
                                                            cy="157.44753"
                                                            rx="3.8447747"
                                                            ry="3.7246256" /><ellipse className='pyke' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                              style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                              id="path2-0-3-4"
                                                              cx="-185.59689"
                                                              cy="141.83713"
                                                              rx="3.8447747"
                                                              ry="3.7246256" /><ellipse className='harrenhal' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                id="path2-0-8"
                                                                cx="-108.33855"
                                                                cy="164.85585"
                                                                rx="3.8447747"
                                                                ry="3.7246256" /><ellipse className='oldtown' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                  style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                  id="path2-0-9"
                                                                  cx="-189.30106"
                                                                  cy="279.15585"
                                                                  rx="3.8447747"
                                                                  ry="3.7246256" /><ellipse className='braavos' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                    style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                    id="path2-0-24"
                                                                    cx="5.9614511"
                                                                    cy="111.67461"
                                                                    rx="3.8447747"
                                                                    ry="3.7246256" /><ellipse className='highgarden' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                      style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                      id="path2-0-58"
                                                                      cx="-163.37189"
                                                                      cy="250.31628"
                                                                      rx="3.8447747"
                                                                      ry="3.7246256" /><ellipse className='winterfell' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                        style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                        id="path2-0-1"
                                                                        cx="-125.60042"
                                                                        cy="22.827314"
                                                                        rx="3.8447747"
                                                                        ry="3.7246256" /><ellipse className='dreadfort' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                          style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                          id="path2-0-0"
                                                                          cx="-82.938545"
                                                                          cy="17.482937"
                                                                          rx="3.8447747"
                                                                          ry="3.7246256" /><ellipse className='dragonstone' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                            style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                            id="path2-0-5"
                                                                            cx="-50.659389"
                                                                            cy="180.46628"
                                                                            rx="3.8447747"
                                                                            ry="3.7246256" /><ellipse className='theeyrie' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                              style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                              id="path2-0"
                                                                              cx="-74.521767"
                                                                              cy="133.42314"
                                                                              rx="3.8447747"
                                                                              ry="3.7246256" /><ellipse className='casterlyrock' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                                style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                                id="path2-0-2"
                                                                                cx="-185.86147"
                                                                                cy="184.17044"
                                                                                rx="3.8447747"
                                                                                ry="3.7246256" /><ellipse className='kingslanding' onClick={navigateToPage} onMouseEnter={showPopup} onMouseLeave={hidePopup}
                                                                                  style={{ fill: '#ff0000', fillOpacity: 1, strokeWidth: 0.264583 }}
                                                                                  id="path2-0-7"
                                                                                  cx="-80.222481"
                                                                                  cy="193.97641"
                                                                                  rx="3.8447747"
                                                                                  ry="3.7246256" /></g>
      </svg>
    </div>
  )
}